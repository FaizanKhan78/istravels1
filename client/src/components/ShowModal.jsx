import { X } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Hooks/useAuth';
import { toast } from 'react-toastify';

const ShowModal = ( { user, setModal } ) =>
{
    const { fetchData } = useAuth();
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
    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();
        // console.log( userValue.mobile_no );
        try
        {
            const payload = {
                student_name: userValue.student_name,
                mobile_no: parseInt( userValue.mobile_no ),
                Rate: parseInt( userValue.Rate ),
                payment_date: userValue.payment_date,
                due_date: userValue.due_date,
                std: userValue.std,
                pending_amount: userValue.pending_amount,
                paid_amount: userValue.paid_amount,
                isAdmin: userValue.isAdmin,
                status: userValue.status,
            };
            // console.log( payload );
            await axios.patch( `http://localhost:9000/admin/updateSingle/${ userValue.mobile_no }`, payload );
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
                    <button onClick={ saveChanges }><X /></button>
                    <h1 className="text-5xl font-bold">Edit { userValue?.student_name }</h1>
                    <form onSubmit={ handleSubmit }>
                        <label className='mb-5'>Enter Rate</label>
                        < input type="tel" className="py-3 px-5 mb-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" value={ userValue?.Rate } name='Rate' placeholder="Input text" onChange={ handleChange } />

                        <label>Enter New Payment Date</label>
                        <input type="tel" className='py-3 px-5 mb-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600' placeholder='Enter New Price...' value={ userValue?.payment_date } name="payment_date" onChange={ handleChange } />

                        <label>Enter New Due Date</label>
                        <input className='py-3 px-5 mb-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600' placeholder='Enter New Price...' value={ userValue?.due_date } name="due_date" onChange={ handleChange } />
                        <label>Enter Pick Up Address</label>
                        <input className='py-3 px-5 mb-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600' placeholder='Enter New Price...' value={ userValue?.due_date } name="due_date" onChange={ handleChange } />
                        <label>Enter Drop Address</label>
                        <input className='py-3 px-5 mb-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600' placeholder='Enter New Price...' value={ userValue?.due_date } name="due_date" onChange={ handleChange } />
                        {/* <input className='text-black' type="text" placeholder='Enter New Price...' value={ userValue?.payment_date } name="Rate" onChange={ handleChange } /> */ }
                        <button className=" block mt-4 mb-0 ml-auto mr-auto py-3 px-4 items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ShowModal;