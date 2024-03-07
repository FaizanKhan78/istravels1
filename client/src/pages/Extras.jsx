import { useAuth } from "../Hooks/useAuth";
import register_not_approved from '../images/Bing_Not_Approve.jpg';
import registration_successful from '../images/Bing_Scholl_Bus.jpg';
const Extras = () =>
{
    const { user } = useAuth();
    return (
        <>
            {
                user[ 0 ]?.status ?
                    <>
                        <section className="d-flex items-center justify-center">
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