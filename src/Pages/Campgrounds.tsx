import React from 'react'
import Navbar from '../Components/Navbar';
import Logo from '../Components/Logo';
import { Link } from 'react-router-dom';

const Campgrounds = () => {
  return (
    <div className='mx-auto font-archivo px-4 pb-4 text-lightgray sm:px-8 md:px-0 md:container'>
      <Navbar/>
      <main className="bg-[#f5f1ec] p-4 my-6">
        <h2 className='text-3xl font-bold text-black'>Welcome to YelpCamp!</h2>
        <p className='my-2'>View our hand-picked campgrounds from all over the world, or add your own.</p>
        <form >
          <input type="search" name="search" id="search" className='w-full p-2'/>
          <button className="text-white bg-black p-4 w-full font-bold rounded-md my-4 hover:translate-x-1">Search</button>
        </form>
        <Link to='/addcampground' className='underline'>Or add your own campground</Link>
      </main>
      <Logo />
    </div>
  )
}

export default Campgrounds