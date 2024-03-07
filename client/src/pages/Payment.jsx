import { useAuth } from './../Hooks/useAuth';
import notLogin from '../images/_fbbf820b-334a-45e0-b127-aad1f3b346af.jpeg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Payment = () =>
{
    const { user, isLoggedIN, userAuthentication } = useAuth();
    useEffect( () =>
    {
        userAuthentication();
    }, [] );
    const handlePrint = () =>
    {
        print();

    };

    return (
        <>
            { isLoggedIN ?
                <>
                    <div className="mb-5 pb-5 flex justify-between mt-10 items-center border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Invoice</h2>
                        </div>

                        <div className="inline-flex gap-x-2">
                            <button onClick={ handlePrint } className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                                Print
                            </button>
                        </div>
                    </div>
                    { user &&
                        user.map( ( user, index ) =>
                        {
                            return (
                                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10" key={ index }>
                                    <div className="grid md:grid-cols-2 gap-3" >
                                        <div>
                                            <div className="grid space-y-3">
                                                <dl className="grid sm:flex gap-x-3 text-sm">
                                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                                        Id :
                                                    </dt>
                                                    <dd className="text-gray-800 dark:text-gray-200">
                                                        <span className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                                            { user.id }
                                                        </span>
                                                    </dd>
                                                </dl>
                                                <dl className="grid sm:flex gap-x-3 text-sm">
                                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                                        Bus :
                                                    </dt>
                                                    <dd className="text-gray-800 dark:text-gray-200">
                                                        <span className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                                            { user.route === "empty" ? "No Root Selected" : user.route }
                                                        </span>
                                                    </dd>
                                                </dl>
                                                <dl className="grid sm:flex gap-x-3 text-sm">
                                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                                        Billed to:
                                                    </dt>
                                                    <dd className="text-gray-800 dark:text-gray-200">
                                                        <span className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                                            { user.student_name }
                                                        </span>
                                                    </dd>
                                                </dl>

                                                <dl className="grid sm:flex gap-x-3 text-sm">
                                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                                        Billing details:
                                                    </dt>
                                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                                        <address className="not-italic font-normal">
                                                            { user.mobile_number }
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
                                                        Payment date:
                                                    </dt>
                                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                                        { user.payment_date }
                                                    </dd>
                                                </dl>
                                                <dl className="grid sm:flex gap-x-3 text-sm">
                                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                                        Due date:
                                                    </dt>
                                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                                        { user.due_date }
                                                    </dd>
                                                </dl>
                                                <dl className="grid sm:flex gap-x-3 text-sm">
                                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                                        Society:
                                                    </dt>
                                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                                        { user.society }
                                                    </dd>
                                                </dl>
                                                <dl className="grid sm:flex gap-x-3 text-sm">
                                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                                        Pick Up Address :
                                                    </dt>
                                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                                        { user.pick_up_address }
                                                    </dd>
                                                </dl>
                                                <dl className="grid sm:flex gap-x-3 text-sm">
                                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                                        Drop Up Address :
                                                    </dt>
                                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                                        { user.drop_up_address }
                                                    </dd>
                                                </dl>
                                                <dl className="grid sm:flex gap-x-3 text-sm">
                                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                                        Area :
                                                    </dt>
                                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                                        { user.area }
                                                    </dd>
                                                </dl>
                                                <dl className="grid sm:flex gap-x-3 text-sm">
                                                    <dt className="min-w-36 max-w-[200px] text-gray-500">
                                                        Time :
                                                    </dt>
                                                    <dd className="font-medium text-gray-800 dark:text-gray-200">
                                                        { user.time }
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                                        <div className="hidden sm:grid sm:grid-cols-6">
                                            <div className="text-start text-xs font-medium text-gray-500 uppercase">Pending Amount</div>
                                            <div className="text-start text-xs font-medium text-gray-500 uppercase">Paid Amount</div>
                                            <div className="text-start text-xs font-medium text-gray-500 uppercase">Rate</div>
                                            <div className="text-end text-xs font-medium text-gray-500 uppercase">Amount</div>
                                        </div>

                                        <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

                                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">

                                            <div>
                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Pending Amount</h5>
                                                <p className="text-gray-800 dark:text-gray-200">{ user.pending_amount }</p>
                                            </div>
                                            <div>
                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Paid Amount</h5>
                                                <p className="text-gray-800 dark:text-gray-200">{ user.paid_amount }</p>
                                            </div>
                                            <div>
                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                                                <p className="text-gray-800 dark:text-gray-200">{ user.rate }</p>
                                            </div>
                                            <div>
                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                                                <p className="sm:text-end text-gray-800 dark:text-gray-200">{ user.pending_amount + user.paid_amount }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex sm:justify-end">
                                        <div className="w-full max-w-2xl sm:text-end space-y-2">
                                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                                <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                                    <dt className="col-span-3 text-gray-500">Amount paid:</dt>
                                                    <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">{ user.pending_amount + user.paid_amount }</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='mt-5' />
                                </div>
                            );
                        } )
                    }
                </>
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