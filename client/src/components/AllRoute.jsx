import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Login from '../pages/Login';
import Payment from '../pages/Payment';
import Admin from '../pages/Admin';
import Register from '../pages/Register';
import PageNotFound from '../pages/PageNotFound';
import Logout from '../pages/Logout';
import Extras from '../pages/Extras';
import { useAuth } from '../Hooks/useAuth';
const AllRoute = () =>
{
    const { user } = useAuth();
    return (
        <>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/aboutUs' element={ <AboutUs /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/extras' element={ <Extras /> } />
                <Route path='/payment' element={ <Payment /> } />
                { user[ 0 ]?.isAdmin && <Route path='/admin' element={ <Admin /> } >
                </Route> }
                <Route path='/register' element={ <Register /> } />
                <Route path='/logout' element={ <Logout /> } />
                <Route path='*' element={ <PageNotFound /> } />
            </Routes>
        </>
    );
};

export default AllRoute;