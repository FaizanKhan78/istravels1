import { useAuth } from './../Hooks/useAuth';
import notLogin from '../images/_fbbf820b-334a-45e0-b127-aad1f3b346af.jpeg';
import { Link } from 'react-router-dom';
const Payment = () =>
{
    const { user, isLoggedIN } = useAuth();
    return (
        <>
            { isLoggedIN ? <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-28 mb-28">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Mobile Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rate
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pending Fee
                            </th>
                            <th scope="col" className="px-6 py-3">
                                STD
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Paid
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Payment Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Due Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pay Now
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { user && user.map( ( item ) =>
                        {
                            return (
                                <tr key={ item.id } className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        { item.mobile_no }
                                    </th>
                                    <td className="px-6 py-4">
                                        { item.student_name }
                                    </td>
                                    <td className="px-6 py-4">
                                        { item.Rate }
                                    </td>
                                    <td className="px-6 py-4">
                                        { item.pending_amount }
                                    </td>
                                    <td className="px-6 py-4">
                                        { item.std }
                                    </td>
                                    <td className="px-6 py-4">
                                        { item.paid_amount ? item.paid_amount : 0 }
                                    </td>
                                    <td className="px-6 py-4">
                                        { item.payment_date }
                                    </td>
                                    <td className="px-6 py-4">
                                        { item.due_date }
                                    </td>
                                    <td>
                                        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

                                    </td>
                                </tr>
                            );
                        } ) }
                    </tbody>
                </table>
            </div> :
                <>
                    <div className=" items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                            <div className="relative">
                                <div className="absolute">
                                    <div className="">
                                        <h1 className="my-2 text-gray-500 font-bold text-2xl underline">
                                            Looks like you've Not Login.
                                        </h1>
                                        <Link to='/login'>
                                            {/* <button className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
                                                Please Login
                                            </button> */}
                                            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Please Login</button>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={ notLogin } className='w-[30vw]' />
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Payment;