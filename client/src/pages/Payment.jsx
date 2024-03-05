import { useAuth } from './../Hooks/useAuth';
import notLogin from '../images/_fbbf820b-334a-45e0-b127-aad1f3b346af.jpeg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from '../components/PDF/Invoice';
const Payment = () =>
{
    const { user, isLoggedIN } = useAuth();
    const [ quarter, setQuarter ] = useState( "No Quarter Selected" );
    const payment_date = user[ 0 ]?.payment_date || "02-03-2024";
    const due_date = user[ 0 ]?.due_date || "02-03-2024";
    function swap ( date )
    {
        const newDate = date?.split( '-' );
        let temp = newDate[ 0 ];
        newDate[ 0 ] = newDate[ 1 ];
        newDate[ 1 ] = temp;
        return newDate;
    }
    useEffect( () =>
    {
        const b = new Date( swap( due_date ) );
        const a = new Date( swap( payment_date ) );
        const start_month = a.getMonth();
        const end_month = b.getMonth();
        // console.log( start_month );
        // console.log( end_month );
        if ( start_month == 1 && end_month == 3 )
        {
            setQuarter( "First Quarter" );
        } else if ( start_month == 4 && end_month == 6 )
        {
            setQuarter( "Second Quarter" );
        } else if ( start_month == 7 && end_month == 9 )
        {
            setQuarter( "Third Quarter" );
        } else if ( start_month == 10 && end_month == 12 )
        {
            setQuarter( "Fourth Quarter" );
        }
    }, [ setTimeout( () =>
    {

    }, 1000 ), payment_date, due_date ] );

    const handlePrint = () =>
    {
        print( "Hello" );

    };

    const handlePDF = () =>
    {
    };

    return (
        <>
            { isLoggedIN ?
                // <Document file={ `${ user[ 0 ]?.student_name }` }>
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
                    <div className="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Invoice</h2>
                        </div>

                        <div className="inline-flex gap-x-2">
                            <PDFDownloadLink document={ <Invoice /> } fileName='invoice'>
                                { ( { loading } ) => loading ? ( <button onClick={ handlePDF } className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                    Loading...
                                </button> ) : (
                                    <button onClick={ handlePDF } className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                        Invoice PDF
                                    </button>
                                ) }
                            </PDFDownloadLink>
                            <button onClick={ handlePrint } className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                                Print
                            </button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div>
                            <div className="grid space-y-3">
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Id :
                                    </dt>
                                    <dd className="text-gray-800 dark:text-gray-200">
                                        <span className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                            { user[ 0 ]?.id }
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Bus :
                                    </dt>
                                    <dd className="text-gray-800 dark:text-gray-200">
                                        <span className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                            { user[ 0 ]?.route === "empty" ? "No Root Selected" : user[ 0 ]?.route }
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Billed to:
                                    </dt>
                                    <dd className="text-gray-800 dark:text-gray-200">
                                        <span className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                            { user[ 0 ]?.student_name }
                                        </span>
                                    </dd>
                                </dl>

                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Billing details:
                                    </dt>
                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                        <address className="not-italic font-normal">
                                            { user[ 0 ]?.mobile_number }
                                        </address>
                                    </dd>
                                </dl>
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Billing method:
                                    </dt>
                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                        <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                            Pay
                                        </button>
                                    </dd>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="grid space-y-3">
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Invoice number:
                                    </dt>
                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                        ADUQ2189H1-0038
                                    </dd>
                                </dl>
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Payment date:
                                    </dt>
                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                        { user[ 0 ]?.payment_date }
                                    </dd>
                                </dl>
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Due date:
                                    </dt>
                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                        { user[ 0 ]?.due_date }
                                    </dd>
                                </dl>
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Society:
                                    </dt>
                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                        { user[ 0 ]?.society }
                                    </dd>
                                </dl>
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Pick Up Address :
                                    </dt>
                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                        { user[ 0 ]?.pick_up_address }
                                    </dd>
                                </dl>
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Drop Up Address :
                                    </dt>
                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                        { user[ 0 ]?.drop_up_address }
                                    </dd>
                                </dl>
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Area :
                                    </dt>
                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                        { user[ 0 ]?.area }
                                    </dd>
                                </dl>
                                <dl className="grid sm:flex gap-x-3 text-sm">
                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                        Time :
                                    </dt>
                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                        { user[ 0 ]?.time }
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                        <div className="hidden sm:grid sm:grid-cols-6">
                            <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Quarter</div>
                            <div className="text-start text-xs font-medium text-gray-500 uppercase">Pending Amount</div>
                            <div className="text-start text-xs font-medium text-gray-500 uppercase">Paid Amount</div>
                            <div className="text-start text-xs font-medium text-gray-500 uppercase">Rate</div>
                            <div className="text-end text-xs font-medium text-gray-500 uppercase">Amount</div>
                        </div>

                        <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                            <div className="col-span-full sm:col-span-2">
                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Quarter</h5>
                                <p className="font-medium text-gray-800 dark:text-gray-200">{ quarter }</p>
                            </div>
                            <div>
                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Pending Amount</h5>
                                <p className="text-gray-800 dark:text-gray-200">{ user[ 0 ]?.pending_amount }</p>
                            </div>
                            <div>
                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Pending Amount</h5>
                                <p className="text-gray-800 dark:text-gray-200">{ user[ 0 ]?.paid_amount }</p>
                            </div>
                            <div>
                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                                <p className="text-gray-800 dark:text-gray-200">{ user[ 0 ]?.rate }</p>
                            </div>
                            <div>
                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                                <p className="sm:text-end text-gray-800 dark:text-gray-200">{ user[ 0 ]?.pending_amount + user[ 0 ]?.paid_amount }</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex sm:justify-end">
                        <div className="w-full max-w-2xl sm:text-end space-y-2">
                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                {/* <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                    <dt className="col-span-3 text-gray-500">Subotal:</dt>
                                    <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">$2750.00</dd>
                                </dl>

                                <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                    <dt className="col-span-3 text-gray-500">Total:</dt>
                                    <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">$2750.00</dd>
                                </dl> */}

                                {/* <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                    <dt className="col-span-3 text-gray-500">Tax:</dt>
                                    <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">$39.00</dd>
                                </dl> */}

                                <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                    <dt className="col-span-3 text-gray-500">Amount paid:</dt>
                                    <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">{ user[ 0 ]?.pending_amount + user[ 0 ]?.paid_amount }</dd>
                                </dl>
                                {/* 
                                <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                    <dt className="col-span-3 text-gray-500">Due balance:</dt>
                                    <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">$0.00</dd>
                                </dl> */}
                            </div>
                        </div>
                    </div>
                </div>
                // </Document>
                :
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