import { useLayoutEffect, useState } from 'react';
import ShowModal from './ShowModal';
import { useAuth } from '../Hooks/useAuth';
import { Trash2 } from 'lucide-react';
import { FilePenLine } from 'lucide-react';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import ReactPaginate from "react-paginate";
import UpdateAll from './UpdateAll';
const AdminTable = () =>
{
    const { fetchData, allUserData, data, setAllUserData, handleApproved, deleteUser, showActiveUser, showPendingUser } = useAuth();
    useLayoutEffect( () =>
    {
        fetchData();
    }, [] );
    const [ modal, setModal ] = useState( false );
    const [ user, setUser ] = useState( [] );
    const [ searchText, setSearchText ] = useState( "" );
    const [ selectedFilter, setSelectedFilter ] = useState( "" );
    const [ updateAllModal, setUpdateAllModal ] = useState( false );
    const updateModal = () =>
    {
        setUpdateAllModal( !updateAllModal );
    };

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
            const mobile_number = String( user.mobile_number );
            return mobile_number.includes( value );
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
            return user.paid_amount !== 0;
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
        }
    };
    const handleFilterChange = ( e ) =>
    {
        setSelectedFilter( e.target.value );
    };

    function handleRouteA ()
    {
        const route_A_user = data.filter( ( user ) =>
        {
            return user.route === "Route A";
        } );
        setAllUserData( route_A_user );
    }

    function handleRouteB ()
    {
        const route_B_user = data.filter( ( user ) =>
        {
            return user.route === "Route B";
        } );
        setAllUserData( route_B_user );
    }

    function handleRouteF ()
    {
        const route_F_user = data.filter( ( user ) =>
        {
            return user.route === "Route F";
            // return user.route === " Route F";
        } );
        setAllUserData( route_F_user );
        // console.log( / );
    }

    function handleRouteC ()
    {
        const route_C_user = data.filter( ( user ) =>
        {
            return user.route === "Route C";
        } );
        setAllUserData( route_C_user );
    }
    function handleRouteD ()
    {
        const route_D_user = data.filter( ( user ) =>
        {
            return user.route === "Route D";
        } );
        setAllUserData( route_D_user );
    }
    function handleRouteE ()
    {
        const route_E_user = data.filter( ( user ) =>
        {
            return user.route === "Route E";
        } );
        setAllUserData( route_E_user );
    }
    function handleRouteG ()
    {
        const route_G_user = data.filter( ( user ) =>
        {
            return user.route === "Route G";
        } );
        setAllUserData( route_G_user );
    }
    function handleFilterAmount ( e )
    {
        if ( e.target.value === "pending" )
        {
            handlePendingFees();
        } else if ( e.target.value === "paid" )
        {
            handlePaidAmount();
        } else if ( e.target.value === "routeA" )
        {
            handleRouteA();
        } else if ( e.target.value === "routeB" )
        {
            handleRouteB();

        } else if ( e.target.value === "routeC" )
        {
            handleRouteC();

        } else if ( e.target.value === "routeD" )
        {
            handleRouteD();

        } else if ( e.target.value === "routeE" )
        {
            handleRouteE();

        } else if ( e.target.value === "routeF" )
        {
            handleRouteF();
        } else if ( e.target.value === "routeG" )
        {
            handleRouteG();
        }
    }

    const pageVisited = pageNumber * recordsPrePage;
    const sortedData = [ ...allUserData ].sort( ( a, b ) => a.id - b.id );
    const display = sortedData
        .slice( pageVisited, pageVisited + recordsPrePage )
        .map( ( user, index ) => (
            <tr key={ index } className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200" > { user.id }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.student_name }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.mobile_number }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.rate }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.area }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.pick_up_address }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.drop_up_address }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.route }</td>
                <> <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.paid_amount }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.pending_amount }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.payment_date }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.due_date }</td> </>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button type="button" onClick={ () => deleteUser( user._id ) } className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><Trash2 /></button>
                    <button onClick={ () => handleApproved( user.mobile_number ) } type="button" className="ml-10 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><Check /></button>  <button onClick={ () => Edit( user._id ) } type="button" className="ml-10 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><FilePenLine /></button>
                </td>
            </tr>
        ) );

    const pageCount = Math.ceil( allUserData.length / recordsPrePage );
    const changePage = ( { selected } ) =>
    {
        setPageNumber( selected );
    }; return (
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
                    <button className=' bg-blue-100 text-black pl-6 pr-6 rounded-xl' onClick={ updateModal }>
                        Update All
                    </button>
                    <select onChange={ handleFilterChange } className='text-black pl-6 pr-6 pt-2 pb-2 rounded-xl bg-blue-100'>
                        <option selected disabled>Select Filter</option>
                        <option value="number">Number</option>
                        <option value="name">Name</option>
                    </select>
                    <select onChange={ handleFilterAmount } className='text-black pl-6 pr-6 pt-2 pb-2 rounded-xl bg-blue-100'>
                        <option selected disabled>Select Filter</option>
                        <option value="pending">Pending Amount</option>
                        <option value="paid">Paid Amount</option>
                        <option value="routeA">Route A</option>
                        <option value="routeB">Route B</option>
                        <option value="routeC">Route C</option>
                        <option value="routeD">Route D</option>
                        <option value="routeE">Route E</option>
                        <option value="routeF">Route F</option>
                        <option value="routeG">Route G</option>
                    </select>
                </div>
                { allUserData.length === 0 ? <>
                    <section>
                        <div className="bg-[#11001c] text-white">
                            <div className="flex h-screen">
                                <div className="m-auto text-center">
                                    <div>
                                        <h1 className='text-6xl underline'>Not Data</h1>
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
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 whitespace-nowrap uppercase">Mobile Number</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap uppercase">Rate</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap uppercase">Area</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap uppercase">Pick Up Address</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap uppercase">Drop Up Address</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap uppercase">Route</th>
                                                <><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap uppercase">Paid</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap uppercase">Pending</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap uppercase">Payment Date</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 whitespace-nowrap uppercase">Due Date</th></>
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


                                </div>
                            </div>
                        </div>
                    </div >
                    <ReactPaginate
                        previousLabel={ <ArrowLeft /> }
                        nextLabel={ <ArrowRight /> }
                        pageCount={ pageCount }
                        onPageChange={ changePage }
                        containerClassName={ "paginationBttns" }
                        disabledClassName={ "paginationDisabled" }
                        activeClassName={ "customActivePage" }
                    />
                    <hr className='mt-3 border border-fuchsia-900' />
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
                                        background: #fff; /* Set to black */
                                        color: #000;
                                        border-radius: 25px;
                                        padding: 8px 12px;
                                        font-weight: bold; /* Set to bold */
                                    }
                                    `}
                    </style>
                </> }
                { modal && <ShowModal user={ user } setModal={ setModal } /> }
                { updateAllModal && <UpdateAll updateModal={ updateModal } /> }
            </div >
        </>
    );
};



export default AdminTable;