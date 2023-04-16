import React from 'react'
import Navbar from '../Components/Navbar';
import Logo from '../Components/Logo';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/Search-Icon.svg';
import { getCampgrounds } from '../Hooks/useFirestore';
import { campgroundType } from '../Global/interface';

const Campgrounds = () => {
  const {camps} = getCampgrounds();
  
  return (
    <div className='mx-auto font-archivo px-4 pb-4 text-lightgray sm:px-8 md:px-0 md:container'>
      <Navbar/>
      <main className="bg-[#f5f1ec] p-4 my-6 sm:p-8 md:my-10">
        <h2 className='text-3xl font-bold text-black md:w-1/2'>Welcome to YelpCamp!</h2>
        <p className='my-2 text-sm md:w-1/2 md:text-base'>View our hand-picked campgrounds from all over the world, or add your own.</p>
        <form className='sm:w-2/3 md:w-1/2'>
          <p className='relative sm:inline-block md:mr-2 '>
            <img src={searchIcon} alt="search icon" className='absolute top-4 left-4' />
            <input type="search" name="search" id="search" 
            placeholder='Search for camps'
            className='w-full p-4 pl-10 text-sm focus:outline-none rounded-md md:w-auto md:text-base'/>
          </p>
          <button className="text-white bg-black p-4 w-full font-medium rounded-md my-4 hover:translate-x-1 sm:w-auto md:p-[14px] md:text-base">Search</button>
        </form>
        <Link to='/addcampground' className='underline text-sm md:text-base hover:text-highlight'>Or add your own campground</Link>
      </main>

      <section className='md:grid grid-cols-3 gap-4'>
        {camps && camps.map((camp: campgroundType) => {
          const { name, imageUrl, description, price } = camp;
          console.log(imageUrl)
          return (
            <div className='p-4 border border-1 my-4'>
              <img src={imageUrl} alt={name} />
              <h4 className='font-bold text-black mt-2'>{name}</h4>
              <p className='my-2'> { description.substring(0, 70) }... </p>
              <button className='text-black font-bold w-full p-3 border border-1 rounded-md'>View Campground</button>
            </div>
          )
        })}
      </section>

      <Logo />
    </div>
  )
}

export default Campgrounds