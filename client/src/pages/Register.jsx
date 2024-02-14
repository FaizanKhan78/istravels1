import registration_photo from '../images/register2.jpeg';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { registerSchema } from '../schemas';
import axios from 'axios';
import { useAuth } from '../Hooks/useAuth';
import { toast } from 'react-toastify';

const initialValues = {
    student_name: "",
    mobile_no: "",
    password: "",
    pick_up_address: "",
    drop_up_address: "",
    area: "",
    gender: "",
    std: "",
    alter_no: "",
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
                mobile_no: parseInt( values.mobile_no ),
                password: values.password,
                pick_up_address: values.pick_up_address,
                drop_up_address: values.drop_up_address,
                area: values.area,
                gender: values.gender,
                std: parseInt( values.std ),
                alter_no: values.alter_no,
            };
            // console.log( payload );
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
                                Istravels: A vision for 2024
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
                                            <div className="font-semibold text-gray-800 dark:text-gray-200">Josh Grazioso</div>
                                            <div className="text-xs text-gray-500">Director Payments & Risk | Airbnb</div>
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
                                                        <input type="tel" name="mobile_no" value={ values.mobile_no } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile No*</label>
                                                        { errors.mobile_no && touched.mobile_no ? <p className=' text-red-600 mt-1'>{ errors.mobile_no }</p> : null }
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
                                                    {/* <div className="relative">
                                                        <input  id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
                                    focus:pt-6
                                    focus:pb-2
                                    focus:outline-none
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2"placeholder='Alternate Number' />
                                                        <label htmlFor="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                        peer-focus:text-xs
                                        peer-focus:-translate-y-1.5
                                        peer-focus:text-gray-500
                                        peer-[:not(:placeholder-shown)]:text-xs
                                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                        peer-[:not(:placeholder-shown)]:text-gray-500">Alternate Number</label>
                                                    </div> */}
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="text" name="alter_no"
                                                            value={ values.alter_no } onBlur={ handleBlur } onChange={ handleChange } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alternate Number</label>
                                                    </div>
                                                </div>

                                                <div>
                                                    {/* <div className="relative">
                                                        <input  id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
                                    focus:pt-6
                                    focus:pb-2
                                    focus:outline-none
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2"placeholder='STD*' />
                                                        <label htmlFor="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                        peer-focus:text-xs
                                        peer-focus:-translate-y-1.5
                                        peer-focus:text-gray-500
                                        peer-[:not(:placeholder-shown)]:text-xs
                                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                        peer-[:not(:placeholder-shown)]:text-gray-500">STD*</label>
                                                        {
                                                    </div> */}
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="tel" name="std"
                                                            value={ values.std } onChange={ handleChange } onBlur={ handleBlur } id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">STD*</label>
                                                        { errors.std && touched.std ? <p className=' text-red-600 mt-1'>{ errors.std }</p> : null }
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex flex-wrap">
                                                        <div className="flex items-center me-4">
                                                            <input id="red-radio" type="radio" value="male" name="gender" onChange={ handleChange } onBlur={ handleBlur } className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                            <label htmlFor="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                                        </div>
                                                        <div className="flex items-center me-4">
                                                            <input id="green-radio" type="radio" value="female" name="gender" onChange={ handleChange } onBlur={ handleBlur } className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                            <label htmlFor="green-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                                        </div>
                                                        { errors.gender && touched.gender ? <p className=' text-red-600 mt-1'>{ errors.gender }</p> : null }
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            {/* <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Get started</button> */ }
                                            <button type='submit' className="text-white w-full font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Register</button>
                                            <button type='reset' className="text-white w-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */ }
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