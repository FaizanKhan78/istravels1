import about_logo from '../images/About us page-rafiki.png';
import graph from '../images/graph (1).png';
const AboutUs = () =>
{
    return (
        <>
            <h1 className="text-6xl mt-5"><b>Welcome to ISTRAVELS.</b></h1>
            <div className='flex justify-between mt-5 tablet:flex-col items-center'>
                <div className='flex justify-center items-center'>
                    <img src={ graph } alt="bg" className='absolute left-20' />
                    <img src={ about_logo } alt="about_us" className='rounded-md w-[28vw]  relative h-full object-cover left-10 tablet:w-3/4' />
                </div>
                <div className='w-[50vw] tablet:text-center tablet:w-[90vw]'>
                    <p>At ISTRAVELS, we take pride in providing safe, reliable, and efficient transportation solutions for students. With a commitment to excellence and a focus on ensuring the well-being of every child, we have become a trusted partner for schools and parents alike.</p>


                    <p className='mt-5'><b>Our Mission :-</b>Our mission is to create a secure and comfortable journey for students to and from school, fostering an environment where they feel safe and cared for. We strive to be a driving force in the educational experience, recognizing the importance of punctuality, reliability, and a positive atmosphere during transit.</p>

                    <h1 className="text-4xl mt-5"><b>Why Choose ISTRAVELS?</b></h1>
                    <p className='mt-3'><b>Safety First:</b> The safety of your children is our top priority. Our fleet is equipped with state-of-the-art safety features, and our drivers undergo rigorous training to ensure the utmost security during every trip.</p>

                    <p className='mt-5'><b>Professional Team:</b> Our team of dedicated drivers and staff is passionate about what they do. They are not just drivers; they are guardians on the road, providing a caring and supportive environment for your children.</p>
                </div>
            </div>
        </>
    );
};

export default AboutUs;