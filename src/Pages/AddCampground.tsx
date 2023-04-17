import React, { useState } from "react";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";
import { addDoc, collection } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { cloudDB, storage } from "../Database/config";
import { campgroundType } from "../Global/interface";
import { useGlobalContext } from "../Global/Context";
import { useNavigate } from "react-router-dom";

const AddCampground = () => {
    const navigate = useNavigate()
    const { state } = useGlobalContext();
    const [ campInfo, setCampInfo ] = useState<campgroundType>({name:'', price:'', imageUrl:'', description:'', id:''})
    const [ imageData, setImageData ] = useState<any>()
    const [ message, setMessage ] = useState<string>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCampInfo({...campInfo, [e.target.name] : e.target.value})
    }
    const handleImage = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const file = target.files
        if (file) setImageData(file[0])
        const uploadImage = uploadBytesResumable(ref(storage, imageData.name), imageData);
        uploadImage.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (err) => {
            setMessage("error occured:" + err)
        }, () => {
            getDownloadURL(uploadImage.snapshot.ref)
            .then((downloadURL: string) => {
                setCampInfo({...campInfo, imageUrl: downloadURL})
              });
        })
    }
    const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const { name, imageUrl, description, price } = campInfo;
        try {
            if ( !state.user ){
                setMessage("Sorry, you need to sign in")
                navigate('/login')
            } else if ( !name || !imageUrl || !description || !price ){
                setMessage("All Fields are Required*")
            } else {
            const docRef = await addDoc(collection(cloudDB, 'campgrounds'), {
            ...campInfo, createdBy: state.user.substring(0, state.user.indexOf('@')), uid: state.uid
            })
            docRef.id ? navigate('/campgrounds') : undefined
            }
        } catch(err){
            setMessage("error occured: " + err)
        }
    }
  return (
    <div className=" mx-auto font-archivo px-4 pb-4 sm:px-8 md:px-0 md:container">
        <Navbar />
        <main className='my-6 mx-auto md:my-12'>
            <h2 className='font-bold text-3xl md:w-2/3 md:mx-auto'>Add New Campground</h2>
            <form className='py-4 sm:w-2/3 md:mx-auto' >
                <div>
                    <label htmlFor="campname" className='text-lightgray'>Campground Name</label> <br />
                    <input type="text" id="campname" required name="name" onChange={handleChange}
                    className="p-3 my-2 w-full text-lightgray focus:outline-none rounded-sm bg-gray-100 md:"/>
                </div>
                <div>
                    <label htmlFor="price" className='text-lightgray'>Price Per Night ($)</label> <br />
                    <input type="text" id="price" required name="price" onChange={handleChange}
                    className="p-3 my-2 w-full text-lightgray focus:outline-none rounded-sm bg-gray-100 md:"/>
                </div>
                <div>
                    <label htmlFor="image" className='text-lightgray'>Image</label> <br />
                    <input type="file" id="image" accept="image/png, image/jpeg" required name="imageUrl" onChange={handleImage}
                    className="p-3 my-2 w-full text-lightgray focus:outline-none rounded-sm bg-gray-100 md:"/>
                </div>
                <div>
                    <label htmlFor="description" className='text-lightgray'>Description</label> <br />
                    <textarea name="description" required id="description" onChange={handleChange} rows={8} className="bg-gray-100 p-3 text-lightgray w-full rounded-sm my-2 focus:outline-none "></textarea>
                </div>
                <div> <p className=" text-red-600 font-bold italic">{message}</p> </div>
                <button onClick={handleSubmit} className="text-white bg-black p-4 w-full font-bold rounded-md my-4 hover:translate-x-1"> Add Campground </button>
            </form>
        </main>
        <Logo />
    </div>
  )
}

export default AddCampground