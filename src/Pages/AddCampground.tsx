import React from 'react';
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";

const AddCampground = () => {
  return (
    <div className=" mx-auto font-archivo px-4 pb-4 sm:px-8 md:px-0 md:container">
        <Navbar />
        <main className='my-6 mx-auto md:my-12'>
            <h2 className='font-bold text-3xl md:w-2/3 md:mx-auto'>Add New Campground</h2>
            <form className='py-4 sm:w-2/3 md:mx-auto'>
                <div>
                    <label htmlFor="campname" className='text-lightgray'>Campground Name</label> <br />
                    <input type="text" id="campname" name="campname" 
                    className="p-3 my-2 w-full text-lightgray focus:outline-none rounded-sm bg-gray-100 md:"/>
                </div>
                <div>
                    <label htmlFor="price" className='text-lightgray'>Price</label> <br />
                    <input type="text" id="price" name="price" 
                    className="p-3 my-2 w-full text-lightgray focus:outline-none rounded-sm bg-gray-100 md:"/>
                </div>
                <div>
                    <label htmlFor="image" className='text-lightgray'>Image</label> <br />
                    <input type="text" id="image" name="image" 
                    className="p-3 my-2 w-full text-lightgray focus:outline-none rounded-sm bg-gray-100 md:"/>
                </div>
                <div>
                    <label htmlFor="description" className='text-lightgray'>Description</label> <br />
                    <textarea name="description" id="description" rows={8} className="bg-gray-100 w-full rounded-sm my-2 focus:outline-none "></textarea>
                </div>

                <button className="text-white bg-black p-4 w-full font-bold rounded-md my-4 hover:translate-x-1"> Add Campground </button>
            </form>
        </main>
        <Logo />
    </div>
  )
}

export default AddCampground