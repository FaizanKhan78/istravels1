import { useState } from "react";
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
const ChangePassword = ( { handleChangePassword } ) =>
{
    const [ togglePassword, setTogglePassword ] = useState( false );
    const [ changePassword, setChangePassword ] = useState( {
        mobile_number: "",
        old_password: "",
        new_password: "",
        password: "",
    } );

    const handleChange = ( event ) =>
    {
        setChangePassword( { ...changePassword, [ event.target.name ]: event.target.value } );
    };

    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();
        if ( changePassword.new_password !== changePassword.password )
        {
            toast.error( "Password Doesn't Match ", {
                theme: "dark",
                autoClose: 2500,
            } );
        }
        else
        {
            const payload = {
                password: changePassword.password,
            };
            try
            {
                await axios.patch( `http://localhost:9000/api/auth/updatePassword/${ changePassword.mobile_number }`,
                    payload );
                toast.success( "Password Change Successfully", {
                    theme: "dark",
                    autoClose: 2500,
                } );
                handleChangePassword();
            } catch ( error )
            {
                toast.error( error.response.data.message, {
                    theme: "dark",
                    autoClose: 2500,
                } );
            }
        }
    };
    const handlePassword = () =>
    {
        setTogglePassword( !togglePassword );
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <section className="max-w-[85vw] min-w-[85vw]">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full p-6  rounded-lg shadow md:mt-0 sm:max-w-md bg-[#11001c] sm:p-8">
                            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Change Password
                            </h2>
                            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={ handleSubmit }>
                                <div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="tel" onChange={ handleChange } name="mobile_number" value={ changePassword.mobile_number } id="floating_tel" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_tel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="password" onChange={ handleChange } value={ changePassword.old_password } name="old_password" id="old_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="old_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Old Password</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="password" onChange={ handleChange } value={ changePassword.new_password } name="new_password" id="new_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="new_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type={ togglePassword ? "text" : "password" } onChange={ handleChange } value={ changePassword.password } name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                                        <button type='button' className='absolute top-2 left-[95%] ' onClick={ handlePassword }> { !togglePassword ? <Eye /> : <EyeOff /> }</button>
                                    </div>
                                </div>

                                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Change</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div >
        </>
    );
};

export default ChangePassword;