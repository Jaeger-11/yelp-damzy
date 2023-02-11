import Logo from "./Logo";
import arrowleft from "../assets/icons8-arrow-left-25.png";
import { Link, useNavigate } from "react-router-dom";
import userTestimonial from "../assets/User-Testimonial.svg";
import { AccessProps } from "../Global/interface";
import {useState} from 'react';
import { auth } from "../Database/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Access = (data : AccessProps) => {
    const navigate = useNavigate();
    const [ userData, setUserData ] = useState<object>();

    const handleInput = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        let newUserData = { [target.name] : [target.value] }
        setUserData({...userData, ...newUserData})
    }

    const handleSubmit = () => {

    }

  return (
    <div className="md:flex md:min-h-screen">
        <section className="p-4 font-archivo sm:p-8 md:relative md:flex md:justify-center md:items-center md:flex-[60%] md:p-0">
            <div className=" flex justify-between items-center mb-4 md:absolute md:top-4 md:w-[90%] lg:w-3/4">
                <Logo />
                <Link to='/campgrounds'><p className="flex gap-1 items-center text-lightgray text-sm md:text-base"> <img src={arrowleft} alt="icons8-arrow-left-25" className="w-4 h-4"/>  <span>Back to campgrounds</span> </p></Link>
            </div>

            <article className="md:w-[90%] lg:w-3/4">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Start exploring camps from all around the world.</h2>
                <form className="my-6">
                    <div>
                        <label htmlFor="username">Username</label> <br />
                        <input type="text" placeholder="username" id="username" name="username" 
                        onChange={handleInput}
                        className="p-3 my-2 w-full text-lightgray focus:outline-none bg-gray-100"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" placeholder="Enter Your Password" 
                        onChange={handleInput}
                        className="p-3 my-2 w-full text-lightgray focus:outline-none bg-gray-100"/>
                    </div>

                    <button onClick={data.functionName} className="text-white bg-black p-4 w-full font-bold rounded-md my-4 hover:translate-x-1"> {data.text} </button>
                    <p className="text-lightgray">Not a user yet? <Link to={data.optionPath} className="text-highlight underline font-bold"> {data.option} </Link></p>
                </form>
            </article>
            
        </section>

        <section className="bg-[#f5f1ec] font-archivo py-8 md:flex-[40%] md:flex md:justify-center md:items-center">
            <div className="p-4 sm:p-8 md:w-3/4">
                <q className="font-bold text-xl">YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added.</q>
                <div className="flex gap-4 items-center my-4">
                    <div> <img src={userTestimonial} alt="user-testimonial" /> </div>
                    <div>
                        <h3 className="font-bold">May Andrews</h3>
                        <p className="text-lightgray">Professional Hiker</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Access