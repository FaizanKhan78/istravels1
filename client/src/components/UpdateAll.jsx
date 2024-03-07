import { useState } from "react";
import axios from 'axios';
import { useAuth } from "../Hooks/useAuth";
import { toast } from 'react-toastify';

const UpdateAll = ( { updateModal } ) =>
{
    const { token, fetchData } = useAuth();
    const [ updateAllSchema, setUpdateAllSchema ] = useState( {
        payment_date: "",
        due_date: "",
        rate: 0,
    } );
    const handleClick = ( val ) =>
    {
        setUpdateAllSchema( { ...updateAllSchema, rate: parseInt( updateAllSchema.rate ) + val } );
    };
    const handleChange = ( event ) =>
    {
        setUpdateAllSchema( { ...updateAllSchema, [ event.target.name ]: event.target.value } );
    };
    function reverseDate ( date )
    {
        const reverse_date = date.split( '-' ).reverse().join( '-' );
        return reverse_date;
    }

    const handleSubmit = async ( event ) =>
    {
        event.preventDefault();
        const payload = {
            payment_date: reverseDate( updateAllSchema.payment_date ),
            due_date: reverseDate( updateAllSchema.due_date ),
            rate: parseInt( updateAllSchema.rate ),
        };
        try
        {
            const res = await axios.patch( `http://localhost:9000/admin/setAllDataDate`, payload, {
                headers: {
                    Authorization: `Bearer ${ token }`,
                }
            } );
            updateModal();
            fetchData();
            // console.log( res );
            if ( res.status === 200 )
            {
                toast.success( "All Student Update Successfully", {
                    theme: "dark",
                    autoClose: 2500,
                } );
            }
        } catch ( error )
        {
            console.log( error );
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="mt-10 flex flex-col gap-5 text-white bg-[#001d3d] p-12 rounded-lg">
                    <form onSubmit={ handleSubmit }>
                        <label htmlFor="input-date" className="block text-sm font-medium mb-2 dark:text-white">Payment Date</label>
                        <input onChange={ handleChange } type="date" id="input-date" name="payment_date" value={ updateAllSchema.payment_date } className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="date" required />
                        <label htmlFor="input-due-date" className="block text-sm font-medium mb-2 dark:text-white">Due Date</label>
                        <input onChange={ handleChange } type="date" id="input-due-date" name="due_date" value={ updateAllSchema.due_date } className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="date" required />
                        <div className="bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" >
                            <div className="w-full flex justify-between items-center gap-x-1">
                                <div className="grow py-2 px-3">
                                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                                        Select Rate
                                    </span>
                                    <input className="w-full p-0 text-white bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" value={ updateAllSchema.rate } name="rate" onChange={ handleChange } required />
                                </div>
                                <div className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                                    <button type="button" onClick={ () => handleClick( -1 ) } className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                    </button>
                                    <button type="button" onClick={ () => handleClick( 1 ) } className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Button
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateAll;