import Logo from "./Logo";
import hamburger from "../assets/Hamburger.svg";
import close from '../assets/Close.svg';
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const toggleClicked = () => {
    setClicked(!clicked);
  }

  return (
    <nav className=" mx-auto font-archivo text-lightgray flex justify-between items-center my-4 md:my-6 md:px-0">
        <div className="flex gap-6 items-center">
            <Logo />
            <Link to='/' className="hidden font-bold md:block hover:text-highlight">Home</Link>
        </div>

        <div className="hidden md:block">
            <Link to='/login' className="hover:text-highlight"> Login </Link>
            <Link to='/signup' className="text-white bg-black p-4 rounded-md ml-4 hover:text-highlight">Create an account</Link>
        </div>

        <div className="text-lightgray hidden md:block">
          <span className="font-bold"> user </span>
          <span className="ml-4 hover:text-highlight">Logout</span>
        </div>

        { clicked ? 
        <img src={close} alt="close" onClick={toggleClicked}/> : 
        <img src={hamburger} alt="hamburger menu" className=" p-1 bg-[#f5f1ec] md:hidden" onClick={toggleClicked}/> 
        }

        { clicked ? <section className="absolute flex text-center px-4 py-8 flex-col text-black gap-6 rounded-md top-4 right-4 w-max bg-[#f5f1ec] md:hidden">
        <img src={close} alt="close menu" className=" absolute top-3 w-3 h-3 right-3 md:hidden" onClick={toggleClicked}/> 
          <p> <Link to='/'>Home</Link> </p>
          <p> <Link to='/login'> Login </Link> </p>
          <p> <Link to='/signup' className="text-white bg-black p-4 rounded-md hover:text-highlight">Create an account</Link> </p>
        </section> : null }
    </nav>
  )
}

export default Navbar