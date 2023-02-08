import Logo from '../Components/Logo';
import heroImageMobile from '../Assets/Hero-Image-Mobile.jpg';
import heroImageDesktop from '../Assets/Hero-Image-Desktop.jpg';
import checkMark from '../Assets/Checkmark.svg';
import airbnb from '../Assets/Airbnb.svg';
import booking from '../Assets/Booking.svg';
import plumGuide from '../Assets/Plum-Guide.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='font-archivo text-sm sm:text-base'>
        <div className='p-4 sm:p-8 md:hidden'> <Logo/> </div>
        <main className=' md:flex-row-reverse md:flex md:h-screen md:w-screen'>
            <img src={heroImageMobile} alt="camps" className='md:hidden'/>
            <div className='hidden md:block md:flex-[40%]'><img src={heroImageDesktop} alt="camps" className='h-full w-full'/></div>

            <section className='p-4 sm:p-8  md:flex-[60%] md:flex md:items-center'>
                <article className='lg:w-3/4 mx-auto'>
                    <span className='hidden md:block md:absolute md:top-6'><Logo /></span>
                    <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Explore the best camps on Earth.</h3>
                    <p className='text-dark my-3'>YelpCamp is a curated list of the best camping spot on Earth. Unfiltered and unbiased reviews.</p>
                    <section>
                        <div className='flex gap-3 items-center text-dark'>
                            <img src={checkMark} alt="checkmark" />
                            <p> Add your own camp suggestions.</p>
                        </div>
                        <div className='flex gap-3 items-center text-dark my-2'>
                            <img src={checkMark} alt="checkmark" />
                            <p> Leave reviews and experiences.</p>
                        </div>
                        <div className='flex gap-3 items-center text-dark'>
                            <img src={checkMark} alt="checkmark" />
                            <p> See locations for all camps.</p>
                        </div>
                    </section>
                    <Link to='/'><button className='p-4 text-white bg-black my-4 rounded-md hover:translate-x-1'> View Campgrounds </button></Link>
                    <div>
                        <p>Partnered with:</p>
                        <div className=''>
                            <img src={airbnb} alt="airbnb" className='inline w-[20%] sm:w-auto'/>
                            <img src={booking} alt="booking" className='inline w-[30%] sm:w-auto'/>
                            <img src={plumGuide} alt="plumGuide" className='inline w-[40%] sm:w-auto'/>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    </div>
  )
}

export default Home