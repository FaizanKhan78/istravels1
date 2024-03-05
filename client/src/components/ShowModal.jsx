import { X } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Hooks/useAuth';
import { toast } from 'react-toastify';

const ShowModal = ( { user, setModal } ) =>
{
    const { fetchData, token } = useAuth();
    const [ userValue, setUserValue ] = useState( user[ 0 ] );
    // console.log( userValue );
    const saveChanges = () =>
    {
        setModal( false );

    };
    const handleChange = ( e ) =>
    {
        setUserValue( { ...userValue, [ e.target.name ]: e.target.value } );
    };
    // console.log( userValue );
    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();
        // console.log( userValue.mobile_number );
        try
        {
            const payload = {
                student_name: userValue.student_name,
                mobile_number: parseInt( userValue.mobile_number ),
                rate: parseInt( userValue.rate ),
                payment_date: userValue.payment_date,
                due_date: userValue.due_date,
                pick_up_address: userValue.pick_up_address,
                drop_up_address: userValue.drop_up_address,
                route: userValue.route,
                std: parseInt( userValue.std ),
                pending_amount: parseInt( userValue.pending_amount ),
                paid_amount: parseInt( userValue.paid_amount ),
            };
            // console.log( payload );
            await axios.patch( `http://localhost:9000/admin/updateSingle/${ userValue.mobile_number }`, payload, {
                headers: {
                    Authorization: `Bearer ${ token }`,
                }
            } );
            fetchData();
            setModal( false );
        } catch ( error )
        {
            toast.error( error.response.data );
        }
    };
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="mt-10 flex flex-col gap-5 text-white bg-[#001d3d] p-12 rounded-lg">
                    <button className='hover:text-red-800 transition-all' onClick={ saveChanges }><X /></button>
                    <h1 className="text-5xl font-bold">Edit { userValue?.student_name.charAt( 0 ).toUpperCase() + userValue?.student_name.slice( 1 ) }</h1>
                    <form onSubmit={ handleSubmit }>
                        <div className='flex gap-10 mb-5'>
                            <div>
                                <label>Enter New Payment Date</label>
                                <input type="tel" className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#023047] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600' placeholder='Enter New Price...' value={ userValue?.payment_date } name="payment_date" onChange={ handleChange } />
                            </div>
                            <div>
                                <label>Enter New Due Date</label>
                                <input className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#023047] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600' placeholder='Enter New Price...' value={ userValue?.due_date } name="due_date" onChange={ handleChange } />

                            </div>

                        </div>
                        <div className='flex gap-10 mb-5'>
                            <div>
                                <label>Enter Drop Address</label>
                                <input className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#023047] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600' placeholder='Enter New Price...' value={ userValue?.drop_up_address } name="drop_up_address" onChange={ handleChange } />
                            </div>
                            <div>
                                <label>Enter Pick Up Address</label>
                                <input className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#023047] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600' placeholder='Enter New Price...' value={ userValue?.pick_up_address } name="pick_up_address" onChange={ handleChange } />
                            </div>
                        </div>
                        <div className='flex gap-10 mb-5'>
                            <div>
                                <label className='mb-5'>Enter Rate</label>
                                <input type="tel" name='rate' className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#023047] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" value={ userValue?.rate } placeholder="Input Rate" onChange={ handleChange } />
                            </div>
                            <div>
                                <label className='mb-5'>Enter Route</label>
                                <input type="tel" name='route' className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#023047] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" value={ userValue?.route } placeholder="Input Route" onChange={ handleChange } />
                            </div>
                        </div>
                        <div className='flex gap-10 mb-5'>
                            <div>
                                <label className='mb-5'>Enter Payment Amount</label>
                                <input type="tel" name='pending_amount' className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#023047] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" value={ userValue?.pending_amount } placeholder="Input Rate" onChange={ handleChange } />
                            </div>
                            <div>
                                <label className='mb-5'>Enter Paid Amount</label>
                                <input type="tel" name='paid_amount' className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#023047] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" value={ userValue?.paid_amount } placeholder="Input Route" onChange={ handleChange } />
                            </div>
                        </div>
                        <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Update { userValue?.student_name.charAt( 0 ).toUpperCase() + userValue?.student_name.slice( 1 ) }
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ShowModal;