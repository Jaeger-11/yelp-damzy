import Logo from "./Logo";
import hamburger from "../assets/Hamburger.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto font-archivo text-lightgray flex justify-between items-center my-8">
        <div className="flex gap-6 items-center">
            <Logo />
            <Link to='/' className="hidden font-bold md:block">Home</Link>
        </div>

        <div className="hidden md:block">
            <Link to='/login'> Login </Link>
            <Link to='/signup' className="text-white bg-black p-4 rounded-md ml-4">Create an account</Link>
        </div>

        <img src={hamburger} alt="hamburger menu" className="md:hidden" />
    </nav>
  )
}

export default Navbar