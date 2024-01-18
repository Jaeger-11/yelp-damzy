import { useState } from 'react';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';
import { useGlobalContext } from "../Global/Context";
import { useNavigate, useLocation } from 'react-router-dom';
import { addDoc, collection, updateDoc, doc, arrayUnion, Timestamp, serverTimestamp } from "firebase/firestore";
import { cloudDB } from "../Database/config";

const AddComment = () => {
  const location = useLocation()
  const documentId = location.state
  console.log(documentId);
  const navigate = useNavigate();
  const { state } = useGlobalContext();
  const [comment, setComment] = useState<string>('')
  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }
  const handleSubmit  = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(comment)
    try {
      if ( !state.user ){
          console.log("Sorry, you need to sign in")
          navigate('/login')
      } else if ( !comment){
          console.log("All Fields are Required*")
      } else {
        const docRef = doc(cloudDB, "campgrounds", documentId);
        const dr = await updateDoc(docRef, {
          comments : arrayUnion({comment: comment, created: new Date(), commentedBy: state.user.substring(0, state.user.indexOf('@'))})
        })
        navigate('/campground', {state : documentId})
      }
    } catch(err){
        console.log("error occured: " + err)
    }
  }

  return (
    <div className=" mx-auto font-archivo px-4 pb-4 sm:px-8 md:px-0 md:container">
        <Navbar />
        <main className='my-6 mx-auto md:my-12'>
            <h2 className='font-bold text-3xl md:w-2/3 md:mx-auto'>Add New Comment</h2>
            <form className='py-4 sm:w-2/3 md:mx-auto'>
                <div>
                    <label htmlFor="description" className='text-lightgray'>Description</label> <br />
                    <textarea name="description" id="description" rows={8} className="bg-gray-100 p-4 w-full rounded-sm my-2 focus:outline-none" onChange={handleChange}></textarea>
                </div>
                <button onClick={handleSubmit} className="text-white bg-black p-4 w-full font-bold rounded-md my-4 hover:scale-x-95 transition-all" > Post Comment </button>
            </form>
        </main>
        <Logo />
    </div>
  )
}

export default AddComment;