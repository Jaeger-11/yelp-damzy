import logoImage from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
        <Link to='/'><img src={logoImage} alt="logo" /></Link>
    </div>
  )
}

export default Logo