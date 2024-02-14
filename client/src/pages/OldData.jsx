import { useAuth } from '../Hooks/useAuth';
import { useLayoutEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from 'lucide-react';
const OldData = () =>
{
    const { OldData, allUserData } = useAuth();
    const [ pageNumber, setPageNumber ] = useState( 0 );
    const recordsPerPage = 15;
    useLayoutEffect( () =>
    {
        OldData();
    }, [] );
    const pageVisited = pageNumber * recordsPerPage;
    const display = allUserData
        .slice( pageVisited, pageVisited + recordsPerPage )
        .map( ( user ) => (
            <tr key={ user.id }>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.id }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.student_name }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.pick_up_address }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.area }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.mobile_no }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Rate }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Jun }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Jul }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Aug }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Sep }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Oct }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Nov }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Dec }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Jan }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Feb }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Mar }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.Apr }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{ user.May }</td>
            </tr> ) );
    const pageCount = Math.ceil( allUserData.length / recordsPerPage );
    const changePage = ( { selected } ) =>
    {
        setPageNumber( selected );
    }; return (
        <>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Id</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Pick Up Address</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Area</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Mobile No.</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Rate</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Jun</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Jul</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Aug</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Sep</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Oct</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Nov</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Dec</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Jan</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Feb</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Mar</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Apr</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">May</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {
                                        allUserData.length === 0 ?
                                            <h1>Not Data</h1> :
                                            (
                                                // <h1>hello</h1>
                                                display
                                            )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
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
        </>
    );
};

export default OldData;