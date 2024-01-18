import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Logo from '../Components/Logo';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/Search-Icon.svg';
import { getCampgrounds } from '../Hooks/useFirestore';
import { campgroundType } from '../Global/interface';

const Campgrounds = () => {
  const {camps} = getCampgrounds();  
  const [output, setOutput] = useState<campgroundType[]>([])
  useEffect(() => {
    setOutput(camps)  
  }, [camps])
  
  // let output = camps
  const [search, setSearch] = useState<string>('')
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value){
      setSearch(e.target.value)
    } else {
      setOutput(camps)
    }
  }
  const handleSearch = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let searchOutput = camps.filter((item:campgroundType) => item.name.toLowerCase().includes(search))
    setOutput(searchOutput);
  }

  return (
    <div className='mx-auto font-archivo px-4 pb-4 text-lightgray sm:px-8 md:px-0 md:container'>
      <Navbar/>
      <main className="bg-[#f5f1ec] p-4 my-6 sm:p-8 md:my-10">
        <h2 className='text-3xl font-bold text-black md:w-1/2'>Welcome to YelpCamp!</h2>
        <p className='my-2 text-sm md:w-1/2 md:text-base'>View our hand-picked campgrounds from all over the world, or add your own.</p>
        <form className='sm:w-2/3 md:w-1/2 md:flex md:mb-2'>
          <div className='w-full flex gap-3 items-center bg-white rounded-md px-4 md:w-max md:mr-2 '>
            <img src={searchIcon} alt="search icon" className='' />
            <input type="search" name="search" id="search" 
            placeholder='Search for camps'
            className='py-4 text-sm focus:outline-none md:w-auto md:text-base'
            onInput={handleChange}
            />
          </div>
          <button onClick={handleSearch} className="text-white bg-black p-4 w-full font-medium rounded-md my-4 md:my-0 hover:scale-x-105 transition-all sm:w-auto md:p-[14px] md:text-base">Search</button>
        </form>
        <Link to='/addcampground' className='underline text-sm md:text-base hover:text-highlight transition-all'>Or add your own campground</Link>
      </main>

      <section className='sm:grid smd:grid-cols-2 md:grid-cols-3 gap-4'>
        {output.length > 0 ? output.map((camp: campgroundType) => {
          const { name, imageUrl, description, id } = camp;
          return (
            <div key={id} className='p-4 border border-1 my-2 hover:opacity-70'>
              <img src={imageUrl} alt={name} className="rounded-md" />
              <h4 className='font-bold text-black mt-2'>{name}</h4>
              <p className='my-2'> { description.substring(0, 70) }... </p>
              <Link to='/campground' state={id}> <button className='text-black font-bold w-full p-3 border border-1 hover:text-gray-500 rounded-md'>View Campground</button> </Link>
            </div>
          )
        }) : 
        <div className='font-bold text-xl text-center text-[red] w-full mt-4 my-8'>CAMP NOT FOUND</div>
      }
      </section>

      <Logo />
    </div>
  )
}

export default Campgrounds