import Logo from "./Logo";
import hamburger from "../assets/Hamburger.svg";
import close from '../assets/Close.svg';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../Global/Context";
import { auth } from "../Database/config";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();
  const [clicked, setClicked] = useState<boolean>(false);
  const toggleClicked = () => {
    setClicked(!clicked);
  }
  const logOut = () => {
    signOut(auth).then(() => {
        dispatch({type:'RESET'});
      }).catch((error) => {
        console.log(error)
    });
}

  return (
    <nav className=" mx-auto font-archivo text-lightgray flex justify-between items-center my-4 md:my-6 md:px-0">
        <div className="flex gap-6 items-center">
            <Logo />
            <Link to='/' className="hidden font-bold md:block hover:text-highlight">Home</Link>
        </div>

        { !state.user ? 
        <div className="hidden md:block">
            <Link to='/login' className="hover:text-highlight"> Login </Link>
            <Link to='/signup' className="text-white bg-black p-4 rounded-md ml-4 hover:text-highlight">Create an account</Link>
        </div>
        :
        <div className="text-lightgray hidden md:block">
          <span className="font-bold"> {state.user} </span>
          <span className="ml-4 cursor-pointer font-bold hover:text-highlight" onClick={logOut}>Logout</span>
        </div>
        }
        { clicked ? 
        <img src={close} alt="close" onClick={toggleClicked} className=" cursor-pointer md:hidden"/> : 
        <img src={hamburger} alt="hamburger menu" className=" p-1 bg-[#f5f1ec] cursor-pointer md:hidden" onClick={toggleClicked}/> 
        }

        { clicked ? 
        <section className="absolute flex text-center px-8 py-8 flex-col text-[#f5f1ec] gap-6 rounded-md top-4 right-8 w-max bg-black md:hidden">
          <img src={close} alt="close menu" className="cursor-pointer absolute top-3 w-3 h-3 right-3 md:top-6 md:right-6 md:hidden" onClick={toggleClicked}/> 
          <p> <Link to='/' className="font-bold hover:text-highlight">Home</Link> </p>
          { !state.user ? 
            <>
              <p> <Link to='/login' className="font-bold hover:text-highlight"> Login </Link> </p>
              <p> <Link to='/signup' className="text-black bg-highlight p-4 rounded-md hover:text-white">Create an account</Link> </p>
            </> :
            <>
              <p className="font-bold"> {state.user} </p>
              <p className="cursor-pointer font-bold hover:text-highlight" onClick={logOut}>Logout</p>
            </>
          }
        </section> : null }
    </nav>
  )
}

export default Navbar