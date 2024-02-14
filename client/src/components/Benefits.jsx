import route from '../images/Location review-bro.png';
import price from '../images/Business Plan-bro.png';
import safety from '../images/school bus-bro.png';

const Benefits = () =>
{
    return (
        <>
            <div className="mt-36 flex justify-center flex-col " >
                <h1 className='text-7xl underline'>Benefits</h1>
                <div className='flex justify-center mt-10'>
                    <div className="flex items-center flex-col text-center mr-20 tablet:m-5">
                        <img src={ route } alt="" className='w-[20vw] rounded-lg ' />
                        <p className="text-xl">Optimize routes to save time and Money</p>
                    </div>
                    <div className="flex items-center flex-col text-center  mr-20 tablet:m-5">
                        <img src={ price } alt="" className='w-[20vw] rounded-lg' />
                        <p className="text-xl">Affordable
                            pricing Plans</p>
                    </div>
                    <div className="flex items-center flex-col text-center tablet:m-5">
                        <img src={ safety } alt="" className='w-[20vw] rounded-lg' />
                        <p className="text-xl">Ensure safety of your Children</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Benefits;