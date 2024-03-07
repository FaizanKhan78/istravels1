import { useState } from 'react';
import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import logo from '../images/istravels-high-resolution-logo-transparent.png';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';

const Navbar = () =>
{
    const { user, isLoggedIN } = useAuth();
    // State to manage the navbar's visibility
    const [ nav, setNav ] = useState( false );

    // Toggle function to handle the navbar's display
    const handleNav = () =>
    {
        setNav( !nav );
    };

    // Array containing navigation items
    return (
        <div className='bg-[#11001c] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            {/* Logo */ }
            <h1 className='max-w-28'><img src={ logo } /></h1>

            {/* Desktop Navigation */ }
            <ul className='hidden md:flex'>
                <li className='p-4  m-2'>
                    <NavLink to="/" className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Home</NavLink>
                </li>
                <li className='p-4  m-2'>
                    <NavLink to='/aboutUs' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>About Us</NavLink>
                </li>
                { user[ 0 ]?.isAdmin && <li className='p-4  m-2'>
                    <NavLink to='/admin' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Admin</NavLink>
                </li> }
                {
                    isLoggedIN ? (
                        <>
                            <li className='p-4  m-2'>

                                <NavLink to='/logout' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Logout</NavLink>
                            </li>
                            <li className='p-4  m-2'>
                                <NavLink to='/extras' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Extras</NavLink>
                            </li>
                        </>
                    ) :
                        (
                            <>
                                <li className='p-4  m-2'>

                                    <NavLink to='/login' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Login</NavLink>
                                </li>
                                <li className='p-4  m-2'>
                                    <NavLink to='/register' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Register</NavLink>
                                </li>
                            </>
                        ) }
                { user[ 0 ]?.status && <li className='p-4  m-2'>

                    <NavLink to='/payment' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Payment</NavLink>

                </li> }
            </ul>

            {/* Mobile Navigation Icon */ }
            <div onClick={ handleNav } className='block md:hidden'>
                { nav ? <X size={ 20 } /> : <AlignJustify size={ 20 } /> }
            </div>

            {/* Mobile Navigation Menu */ }
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#050517] ease-in-out duration-500 z-10'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
                }
            >
                {/* Mobile Logo */ }
                <h1 className='max-w-36'><img src={ logo } /></h1>
                <li className='p-4 border-b  duration-300  cursor-pointer border-gray-600' onClick={ handleNav }>
                    <NavLink to="/" className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Home</NavLink>
                </li>
                <li className='p-4 border-b  duration-300  cursor-pointer border-gray-600' onClick={ handleNav }>
                    <NavLink to='/aboutUs' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>About Us</NavLink>

                </li>
                { user[ 0 ]?.isAdmin && <li className='p-4 border-b  duration-300  cursor-pointer border-gray-600' onClick={ handleNav }>
                    <NavLink to='/admin' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Admin</NavLink>
                </li> }
                {
                    isLoggedIN ? (
                        <>
                            <li className='p-4 border-b  duration-300  cursor-pointer border-gray-600' onClick={ handleNav }>
                                <NavLink to='/logout' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Logout</NavLink>
                            </li>
                            <li className='p-4 border-b  duration-300  cursor-pointer border-gray-600' onClick={ handleNav }>
                                <NavLink to='/extras' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Extras</NavLink>
                            </li>
                        </>
                    ) :
                        (
                            <>
                                <li className='p-4 border-b  duration-300  cursor-pointer border-gray-600' onClick={ handleNav }>

                                    <NavLink to='/login' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Login</NavLink>
                                </li>
                                <li className='p-4 border-b  duration-300  cursor-pointer border-gray-600' onClick={ handleNav }>
                                    <NavLink to='/register' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Register</NavLink>
                                </li>
                            </>
                        ) }
                { user[ 0 ]?.status && <li className='p-4 border-b  duration-300  cursor-pointer border-gray-600' onClick={ handleNav }>
                    <NavLink to='/payment' className={ ( { isActive } ) => { return isActive ? "text-[#6a00f4]  text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-[#6a00f4] before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" : "text-xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"; } }>Payment</NavLink>
                </li> }
            </ul>
        </div>
    );
};

export default Navbar;