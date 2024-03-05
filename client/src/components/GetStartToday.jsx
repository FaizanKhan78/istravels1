import { Link } from 'react-router-dom';
import getStartToday from '../images/Get in touch-rafiki.png';
import { useAuth } from '../Hooks/useAuth';
import bgsvg from '../images/circle-scatter-haikei.png';
const GetStartToday = () =>
{
    const { isLoggedIN } = useAuth();
    return (
        <div className='flex items-center mt-20 mb-20 tablet:flex-col'>
            <div className='tablet:block ml-auto mr-auto'>
                <img src={ bgsvg } alt="" className='absolute w-[40vw]' />
                <img src={ getStartToday } alt="" className='w-[70vw] relative' />
            </div>
            <div className='w-[100vw]'>
                <h1 className='underline'>We Are here to help You</h1>
                <h1 className='text-6xl'>Get Started Today</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, aperiam reprehenderit. Fuga dignissimos perspiciatis vel, illo nesciunt dolores laboriosam aliquam rem incidunt earum consequatur, tempore ab eius voluptates dolor vitae accusamus temporibus quisquam porro deserunt voluptatibus! Sapiente autem iure voluptate vitae a. Quidem incidunt facere tempora animi,</p>
                { !isLoggedIN && <button type="button" className="text-white mt-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "><Link to="/register">Connect Now</Link></button> }
            </div>
        </div>
    );
};

export default GetStartToday;