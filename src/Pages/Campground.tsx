import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCampground } from "../Hooks/useFirestore";
import { commentType } from "../Global/interface";
import mapImage from "../assets/Map.png";
import Navbar from "../Components/Navbar";
import { Timestamp } from "firebase/firestore";

const Campground = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const documentId = location.state;
    const { name, price, description, imageUrl, createdBy, comments } = getCampground(documentId);
    if( !name || !price || !description || !imageUrl){
        navigate('/campgrounds');
    }
    const convertTimestamp = (timestamp:Timestamp):string => {
        let today = new Date()
        let diff = today.getTime()/1000 - timestamp.seconds
        if (diff < 60) {
            return `${diff} seconds ago`;
        } else if (diff < 3600) {
            return `${(diff / 60).toFixed(0)} minutes ago`;
        } else if (diff < 86400) {
            return `${(diff / 3600).toFixed(0)} hours ago`;
        } else if (diff < 2620800) {
            return `${(diff / 86400).toFixed(0)} days ago`
        } else if (diff < 31449600) {
            return `${(diff / 2620800).toFixed(0)} months ago`
        } else {
            return `${(diff / 31449600).toFixed(0)} year(s) ago`
        }
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
                    <section className="flex flex-col gap-3">
                        {comments && comments.map((comm:commentType) => {
                            const {comment, commentedBy, created} = comm;
                            return(
                                <div className="pb-2 border-b-[1px]">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-black font-bold capitalize">{commentedBy}</h4>
                                        <p className="text-sm">{convertTimestamp(created)}</p>
                                    </div>
                                    <p>{comment}</p>
                                </div>
                            )
                        })}
                    </section>
                    <div className="flex justify-end pt-6">
                        <Link to="/addComment" state={documentId}><button className="bg-black text-white font-archivo text-base font-bold flex gap-2 justify-center items-center py-4 px-6 rounded-md mr-0 hover:scale-x-95 transition-all">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                <path d="M12 3.5C17.514 3.5 22 7.092 22 11.507C22 16.424 16.855 19.468 12.09 19.468C10.153 19.468 8.707 19.071 7.696 18.824C6.696 19.437 6.101 19.861 3.424 20.644C3.959 19.271 4.147 17.896 4.026 16.379C3.188 15.379 2.001 13.979 2.001 11.507C2 7.092 6.486 3.5 12 3.5ZM12 1.5C5.662 1.5 0 5.726 0 11.507C0 13.557 0.738 15.57 2.047 17.132C2.102 18.962 1.024 21.588 0.054 23.5C2.656 23.03 6.355 21.992 8.032 20.964C9.45 21.309 10.807 21.467 12.091 21.467C19.175 21.467 24.001 16.63 24.001 11.506C24 5.695 18.299 1.5 12 1.5ZM8.5 11.5C8.5 12.329 7.829 13 7 13C6.172 13 5.5 12.329 5.5 11.5C5.5 10.671 6.172 10 7 10C7.829 10 8.5 10.671 8.5 11.5ZM12 10C11.172 10 10.5 10.671 10.5 11.5C10.5 12.329 11.172 13 12 13C12.829 13 13.5 12.329 13.5 11.5C13.5 10.671 12.829 10 12 10ZM17 10C16.172 10 15.5 10.671 15.5 11.5C15.5 12.329 16.172 13 17 13C17.829 13 18.5 12.329 18.5 11.5C18.5 10.671 17.829 10 17 10Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            Leave a Review
                        </button></Link>
                    </div>
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