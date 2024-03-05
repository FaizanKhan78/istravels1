import { useAuth } from '../Hooks/useAuth';
import HeroLogo from '../images/school bus-cuate.png';
import grap from '../images/graph.png';
import { Link } from 'react-router-dom';
const HeroBanner = () =>
{
    const { isLoggedIN } = useAuth();
    return (
        <div>
            <div className='grid grid-cols-2 tablet:grid-cols-1'>
                <div className='h-full w-full mt-28'>
                    <h1 className="relative before:content-[''] before:absolute before:block before:w-4/6 before:h-[4px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 text-6xl">Welcome To</h1>
                    <h1 className="relative before:content-[''] before:absolute before:block before:w-3/5 before:h-[4px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 text-6xl">ISTRAVELS.</h1>
                    <p className='mt-5 mr-5'>&quot;Welcome to <b>ISTRAVELS</b>, your dedicated school bus travel agency! Navigating the journey between home and school has never been easier. Our website offers a user-friendly experience, providing real-time tracking, efficient route planning, and instant notifications for parents, students, and school administrators. With a secure login, emergency preparedness features, and interactive maps, ISTRAVELS ensures a safe and transparent transportation experience. Join us on ISTRAVELS for a seamless ride where convenience and safety converge effortlessly.&quot;</p>
                    { !isLoggedIN && <button className="text-white mt-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "><Link to="/register">Connect Now</Link></button> }
                </div>
                <div className='grid place-items-center'>
                    <img src={ grap } alt='logo' className='w-full' />
                    <img src={ HeroLogo } alt="logo" className='absolute w-[35vw]' />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;