import { useLayoutEffect, useState } from 'react';
import ShowModal from './ShowModal';
import { useAuth } from '../Hooks/useAuth';
import { Trash2 } from 'lucide-react';
import { FilePenLine } from 'lucide-react';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import ReactPaginate from "react-paginate";
const AdminTable = () =>
{
    const { fetchData, allUserData, data, setAllUserData, handleApproved, toggleButton, deleteUser, showActiveUser, showPendingUser } = useAuth();
    useLayoutEffect( () =>
    {
        fetchData();
    }, [] );
    const [ modal, setModal ] = useState( false );
    const [ user, setUser ] = useState( [] );
    const [ searchText, setSearchText ] = useState( "" );
    const [ selectedFilter, setSelectedFilter ] = useState( "" );

    const [ pageNumber, setPageNumber ] = useState( 0 );
    const recordsPrePage = 15;
    const Edit = ( id ) =>
    {
        const editUser = allUserData.filter( ( user ) => user._id === id );
        setUser( editUser );
        setModal( true );
    };

    const handleSearchByNumber = ( value ) =>
    {
        const user = data.filter( ( user ) =>
        {
            const mobile_no = String( user.mobile_no );
            return mobile_no.includes( value );
        } );
        setAllUserData( user );
    };

    function handleSearchByName ( value )
    {
        const user = data.filter( ( user ) =>
        {
            const student_name = user.student_name.toLowerCase();
            return student_name.includes( value.toLowerCase() );
        } );
        setAllUserData( user );
    }

    const handlePendingFees = () =>
    {
        const pending_user = data.filter( ( user ) =>
        {
            return user.paid_amount === 0;
        } );
        setAllUserData( pending_user );
    };

    const handlePaidAmount = () =>
    {
        const paid_user = data.filter( ( user ) =>
        {
            return user.pending_amount === 0;
        } );
        setAllUserData( paid_user );
    };

    const handleChange = ( e ) =>
    {
        setSearchText( e.target.value );
        const { value } = e.target;

        switch ( selectedFilter )
        {
            case "number": {
                handleSearchByNumber( value );
                break;
            }
            case "name": {
                handleSearchByName( value );
                break;
            }
            case "pending": {
                handlePendingFees();
                break;
            }
            case "paid": {
                handlePaidAmount();
                break;
            }
        }
    };
    const handleFilterChange = ( e ) =>
    {
        setSelectedFilter( e.target.value );
    };

    const pageVisited = pageNumber * recordsPrePage;
    // console.log( pageVisited );
    const sortedData = [ ...allUserData ].sort( ( a, b ) => a.id - b.id );
    const display = sortedData
        .slice( pageVisited, pageVisited + recordsPrePage )
        .map( ( user, index ) => (
            <tr key={ index } className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200" > { user.id }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.student_name }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.mobile_no }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Rate }</td>
                { !toggleButton && <> <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.paid_amount }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.pending_amount }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.payment_date }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.due_date }</td> </> }
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button type="button" onClick={ () => deleteUser( user._id ) } className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><Trash2 /></button>
                    { toggleButton && <button onClick={ () => handleApproved( user.mobile_no ) } type="button" className="ml-10 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><Check /></button> } <button onClick={ () => Edit( user._id ) } type="button" className="ml-10 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><FilePenLine /></button>
                </td>
            </tr>
        ) );

    // console.log( display );

    const pageCount = Math.ceil( allUserData.length / recordsPrePage );
    const changePage = ( { selected } ) =>
    {
        setPageNumber( selected );
    };



    return (
        <>
            <div>
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="flex space-x-2">
                        <span onClick={ showActiveUser } className=" cursor-pointer -mb-px py-3 px-4 inline-flex items-center gap-2 bg-white text-sm font-medium text-center border border-b-transparent text-blue-600 rounded-t-lg dark:bg-gray-800 dark:border-gray-700 dark:border-b-gray-800 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                            Active
                        </span>
                        <span onClick={ showPendingUser } className="cursor-pointer -mb-px py-3 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Pending Registration
                        </span>
                    </nav>
                </div>
                <div className='flex justify-between'>
                    <input type="text" className="py-3 px-4 block w-3/5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search..." value={ searchText } onChange={ handleChange } />
                    <select onChange={ handleFilterChange } className='text-black pl-6 pr-6 pt-2 pb-2 rounded-xl bg-blue-100'>
                        <option selected disabled>Select Filter</option>
                        <option value="number">Number</option>
                        <option value="name">Name</option>
                        <option value="pending">Pending Amount</option>
                        <option value="paid">Paid Amount</option>
                    </select>
                </div>
                { allUserData.length === 0 ? <>
                    <section>
                        <div className="bg-[#11001c] text-white">
                            <div className="flex h-screen">
                                <div className="m-auto text-center">
                                    <div>
                                        <h1 className='text-6xl underline'>Not Data Pending</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section></> : <>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Id</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Mobile No.</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rate</th>
                                                { !toggleButton && <><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Paid</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pending</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Date</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th></> }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allUserData.length === 0 ?
                                                    <h1>Not Data</h1> :
                                                    (
                                                        display.sort()
                                                    )
                                            }

                                        </tbody>
                                    </table>
                                    <ReactPaginate
                                        previousLabel={ <ArrowLeft /> }
                                        nextLabel={ <ArrowRight /> }
                                        pageCount={ pageCount }
                                        onPageChange={ changePage }
                                        containerClassName={ "paginationBttns" }
                                        disabledClassName={ "paginationDisabled" }
                                        activeClassName={ "customActivePage" }
                                    />
                                    <style>{ `
                                    .paginationBttns {
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        margin-top: 20px;
                                        background:"white";
                                    }

                                    .previousBttn,
                                    .nextBttn {
                                        border-radius: 25px;
                                    }

                                    .customActivePage {
                                        background: #000; /* Set to black */
                                        color: #fff;
                                        border-radius: 25px;
                                        padding: 8px 12px;
                                        font-weight: bold; /* Set to bold */
                                    }
                                    `}
                                    </style>
                                </div>
                            </div>
                        </div>
                    </div >
                </> }
                { modal && <ShowModal user={ user } setModal={ setModal } /> }
            </div >
        </>
    );
};



export default AdminTable;