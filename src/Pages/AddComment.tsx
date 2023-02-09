import React from 'react';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';

const AddComment = () => {
  return (
    <div className=" mx-auto font-archivo px-4 pb-4 sm:px-8 md:px-0 md:container">
        <Navbar />
        <main className='my-6 mx-auto md:my-12'>
            <h2 className='font-bold text-3xl md:w-2/3 md:mx-auto'>Add New Comment</h2>
            <form className='py-4 sm:w-2/3 md:mx-auto'>
                <div>
                    <label htmlFor="description" className='text-lightgray'>Description</label> <br />
                    <textarea name="description" id="description" rows={8} className="bg-gray-100 w-full rounded-sm my-2 focus:outline-none "></textarea>
                </div>

                <button className="text-white bg-black p-4 w-full font-bold rounded-md my-4 hover:translate-x-1"> Post Comment </button>
            </form>
        </main>
        <Logo />
    </div>
  )
}

export default AddComment