import { useFormik } from 'formik';
import { loginSchema } from './../schemas/login';
import axios from 'axios';
import { useAuth } from '../Hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';
import { Rocket } from 'lucide-react';
import ChangePassword from '../components/ChangePassword';
import login_image from '../images/Login-amico.png';

const initialValues = {
    mobile_number: "",
    password: "",
};


const Login = () =>
{
    const [ togglePassword, setTogglePassword ] = useState( false );
    const [ changePasswordModal, setChangePasswordModal ] = useState( false );
    const navigate = useNavigate();
    const { storeTokenInLocalStorage } = useAuth();
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik( {
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async ( values, action ) =>
        {
            try
            {
                const payload = {
                    mobile_number: parseInt( values.mobile_number ),
                    password: values.password,
                };
                const res = await axios.post( "http://localhost:9000/api/auth/login", payload );
                storeTokenInLocalStorage( res.data.token );
                navigate( "/payment" );
            } catch ( error )
            {
                toast.error( error.response.data, {
                    theme: "dark",
                    autoClose: 2500,
                } );
            }
            action.resetForm();
        }
    } );
    const handlePassword = () =>
    {
        setTogglePassword( !togglePassword );
    };

    const handleChangePassword = () =>
    {
        setChangePasswordModal( !changePasswordModal );
    };
    return (
        <>
            <div className="relative overflow-hidden">
                <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
                    <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
                        <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
                            Solving problems for every <span className="text-blue-600 dark:text-blue-500">team</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500">
                            Built on standard web technology, teams use ISTRAVELS to build beautiful cross-platform hybrid apps in a fraction of the time.
                        </p>

                        <div className="mt-8 w-full">
                            <Link to='/register'>
                                <button type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <Rocket className='text-[rgb(30,32,134)] bg-gradient-to-r from-indigo-900 via-red-500 to-green-500 bg-clip-text' />
                                    Register
                                </button>
                            </Link>
                        </div>

                        <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                        <form onSubmit={ handleSubmit }>
                            <div className="mb-4">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="tel" name="mobile_number" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={ values.mobile_number } onChange={ handleChange } onBlur={ handleBlur } />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>
                                    { errors.mobile_number && touched.mobile_number ? <p className=' text-red-600 mt-1'>{ errors.mobile_number }</p> : null }
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type={ togglePassword ? "text" : "password" } name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete='password' value={ values.password } onChange={ handleChange } onBlur={ handleBlur } />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    <button type='button' className='absolute top-2 left-[95%] ' onClick={ handlePassword }> { !togglePassword ? <Eye /> : <EyeOff /> }</button>
                                    { errors.password && touched.password ? <p className=' text-red-600 mt-1'>{ errors.password }</p> : null }
                                </div>
                            </div>

                            <div className="grid">
                                <button type='submit' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Login</button>
                                <button type='button' onClick={ handleChangePassword } className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full  bg-no-repeat bg-center bg-cover"><img src={ login_image } alt="" /></div>

                { changePasswordModal && <ChangePassword handleChangePassword={ handleChangePassword } /> }
            </div>
        </>
    );
};

export default Login;