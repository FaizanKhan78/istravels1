import { useAuth } from "../Hooks/useAuth";
import register_not_approved from '../images/register_not_approved.jpeg';
import registration_successful from '../images/register_successful.jpeg';
const Extras = () =>
{
    const { user } = useAuth();
    return (
        <>
            {
                user[ 0 ]?.status ?
                    <>
                        <section>
                            <h1 className="text-6xl flex">Now You Are The Member of &nbsp;<h1 className="text-6xl underline">ISTRAVELS</h1></h1>
                            <img src={ registration_successful } alt="" />
                        </section>

                    </>
                    :
                    <>
                        <section>
                            <img src={ register_not_approved } alt="" />
                        </section>
                    </>
            }
        </>
    );
};

export default Extras;