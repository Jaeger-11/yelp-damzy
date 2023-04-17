import { useLocation, useNavigate } from "react-router-dom";
import { getCampground } from "../Hooks/useFirestore";
import mapImage from "../assets/Map.png";
import Navbar from "./Navbar";

const Campground = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const documentId = location.state;
    const { name, price, description, imageUrl, createdBy } = getCampground(documentId);
    if( !name || !price || !description || !imageUrl){
        // loading
        navigate('/campgrounds');
    }
    
    
  return (
    <div className='mx-auto font-archivo px-4 pb-4 text-lightgray sm:px-8 md:px-0 md:container'>
        <Navbar/>
        <section className="mt-4 md:flex md:mt-8 gap-4 flex-row-reverse">
            <main className="md:flex-[70%]">
                <section className="p-4 border border-1 md:p-8">
                    <img src={imageUrl} alt={name} className="rounded-md w-full" />
                    <div className="flex justify-between items-center">
                        <h4 className='font-bold text-black mt-2'>{name}</h4>
                        <p className="text-black">${price}/night</p>
                    </div>
                    <p className='my-2'> { description } </p>
                    <i> Submitted by { createdBy } </i>
                </section>

                <section className="p-4 border border-1 mt-4 md:p-8">
                    {/* COMMENTS */}
                </section>
            </main>

            <section className="p-4 border border-1 h-max md:flex-[30%] md:p-8">
                <img src={mapImage} alt="map" className="w-full"/>
            </section>
        </section>
    </div>
  )
}

export default Campground