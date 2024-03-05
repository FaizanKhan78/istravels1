// import registration_photo from '../images/register2.jpeg';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { registerSchema } from '../schemas';
import axios from 'axios';
import { useAuth } from '../Hooks/useAuth';
import { toast } from 'react-toastify';

const initialValues = {
    student_name: "",
    mobile_number: "",
    password: "",
    pick_up_address: "",
    drop_up_address: "",
    area: "",
    div: "",
    society: "",
    gender: "",
    std: "",
    alternate_number: "",
};

function swap ( currentDate )
{
    let temp = currentDate[ 0 ];
    currentDate[ 0 ] = currentDate[ 1 ];
    currentDate[ 1 ] = temp;
    const newDate = currentDate.join( '-' );
    return newDate;
}

const currentDate = ( month ) =>
{
    const date = new Date();
    let currentDate = ( date.getMonth() + month + 1 ) + "-" + date.getDate() + "-" + date.getFullYear();
    currentDate = currentDate.split( '-' );
    if ( currentDate[ 0 ] > 12 )
    {
        currentDate[ 0 ] -= 12;
        return swap( currentDate );
    }
    else
    {
        return swap( currentDate );
    }
};

const Register = () =>
{
    const { storeTokenInLocalStorage } = useAuth();
    const navigate = useNavigate();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik( {
        initialValues,
        validationSchema: registerSchema,
        onSubmit: async ( values, action ) =>
        {
            const payload = {
                student_name: values.student_name,
                mobile_number: parseInt( values.mobile_number ),
                password: values.password,
                pick_up_address: values.pick_up_address,
                drop_up_address: values.drop_up_address,
                area: values.area,
                div: values.div,
                society: values.society,
                gender: values.gender,
                payment_date: currentDate( 1 ),
                due_date: currentDate( 3 ),
                std: parseInt( values.std ),
                alternate_number: values.alternate_number,
            };
            console.log( payload );
            axios.post( "http://localhost:9000/api/auth/register", payload )
                .then( ( res ) =>
                {
                    navigate( "/extras" );
                    storeTokenInLocalStorage( res.data.token );
                    toast.success( "Registration Successful" );
                } ).catch( ( error ) =>
                {
                    toast.error( error.response.data.extraDetails );
                    toast.error( error.response.data.message, { theme: "dark", } );

                } );
            action.resetForm();
        }
    } );
    return (
        <>

            <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                                Istravels: A vision for { new Date().getFullYear() }
                            </p>

                            <div className="mt-4 md:mb-12 max-w-2xl">
                                <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
                                    Fully customizable rules to match your unique needs
                                </h1>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.
                                </p>
                            </div>

                            <blockquote className="hidden md:block relative max-w-sm">
                                <svg className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200 dark:text-gray-800" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                                </svg>

                                <div className="relative z-10">
                                    <p className="text-xl italic text-gray-800 dark:text-white">
                                        Amazing people to work with. Very fast and professional partner.
                                    </p>
                                </div>

                                <footer className="mt-3">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                                        </div>
                                        <div className="grow ms-4">
                                            <div className="font-semibold text-gray-800 dark:text-gray-200">Happy Customer</div>
                                            <div className="text-xs text-gray-500">Satisfying Service</div>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>

                        <div>
                            <form onSubmit={ handleSubmit }>
                                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                                    <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-slate-900">
                                        <div className="text-center">
                                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Start Now</h1>
                                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                                Already have an account?
                                                <Link to='/login' className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                    Login
                                                </Link>
                                            </p>
                                        </div>

                                        <div className="mt-5">


                                            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-700 dark:after:border-gray-700">Or</div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="text" name="student_name" value={ values.student_name } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Student Name*</label>
                                                        { errors.student_name && touched.student_name ? <p className=' text-red-600 mt-1'>{ errors.student_name }</p> : null }
                                                    </div>
                                                </div>
                                                <div>

                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="tel" name="mobile_number" value={ values.mobile_number } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number*</label>
                                                        { errors.mobile_number && touched.mobile_number ? <p className=' text-red-600 mt-1'>{ errors.mobile_number }</p> : null }
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="password" name="password" value={ values.password } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password*</label>
                                                        { errors.password && touched.password ? <p className=' text-red-600 mt-1'>{ errors.password }</p> : null }
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="text" name="pick_up_address" value={ values.pick_up_address } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pick Address*</label>
                                                        { errors.pick_up_address && touched.pick_up_address ? <p className=' text-red-600 mt-1'>{ errors.pick_up_address }</p> : null }
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="text" name="drop_up_address" value={ values.drop_up_address } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Drop Address*</label>
                                                        { errors.drop_up_address && touched.drop_up_address ? <p className=' text-red-600 mt-1'>{ errors.drop_up_address }</p> : null }
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="text" name="area" autoComplete='area'
                                                            value={ values.area } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Area*</label>
                                                        { errors.area && touched.area ? <p className=' text-red-600 mt-1'>{ errors.area }</p> : null }
                                                    </div>
                                                </div>


                                                <div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="text" name="alternate_number"
                                                            value={ values.alternate_number } onBlur={ handleBlur } onChange={ handleChange } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alternate Number</label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="tel" name="std"
                                                            value={ values.std } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">STD*</label>
                                                        { errors.std && touched.std ? <p className=' text-red-600 mt-1'>{ errors.std }</p> : null }
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="tel" name="society"
                                                            value={ values.society } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">SOCIETY*</label>
                                                        { errors.society && touched.society ? <p className=' text-red-600 mt-1'>{ errors.society }</p> : null }
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="text" name="div"
                                                            value={ values.div } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DIV*</label>
                                                        { errors.div && touched.div ? <p className=' text-red-600 mt-1'>{ errors.div }</p> : null }
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex flex-wrap">
                                                        <div className="flex items-center me-4">
                                                            <input id="red-radio" type="radio" value="M" name="gender" onChange={ handleChange } onBlur={ handleBlur } className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                            <label htmlFor="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                                        </div>
                                                        <div className="flex items-center me-4">
                                                            <input id="green-radio" type="radio" value="F" name="gender" onChange={ handleChange } onBlur={ handleBlur } className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                            <label htmlFor="green-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                                        </div>
                                                        { errors.gender && touched.gender ? <p className=' text-red-600 mt-1'>{ errors.gender }</p> : null }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <button type='submit' className="text-white w-full font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Register</button>
                                            <button type='reset' className="text-white w-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-12 py-3 flex items-center text-sm text-gray-800 gap-x-1.5 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-gray-700">
                        <span className="font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">10,000+</span>
                        individuals and Schools trust ISTRAVELS
                    </div>
                </div >
            </div >
        </>
    );
};

export default Register;