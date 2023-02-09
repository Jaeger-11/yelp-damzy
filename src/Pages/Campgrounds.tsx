import React from 'react'
import Navbar from '../Components/Navbar';
import Logo from '../Components/Logo';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/Search-Icon.svg'

const Campgrounds = () => {
  return (
    <div className='mx-auto font-archivo px-4 pb-4 text-lightgray sm:px-8 md:px-0 md:container'>
      <Navbar/>
      <main className="bg-[#f5f1ec] p-4 my-6">
        <h2 className='text-3xl font-bold text-black'>Welcome to YelpCamp!</h2>
        <p className='my-2 text-sm'>View our hand-picked campgrounds from all over the world, or add your own.</p>
        <form >
          <p className='relative'>
            <img src={searchIcon} alt="search icon" className='absolute top-4 left-4' />
            <input type="search" name="search" id="search" 
            placeholder='Search for camps'
            className='w-full p-4 pl-10 text-sm focus:outline-none rounded-md'/>
          </p>
          <button className="text-white bg-black p-4 w-full font-medium rounded-md my-4 hover:translate-x-1">Search</button>
        </form>
        <Link to='/addcampground' className='underline text-sm'>Or add your own campground</Link>
      </main>
      <Logo />
    </div>
  )
}

export default Campgrounds