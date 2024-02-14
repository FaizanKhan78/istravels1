import { useLayoutEffect } from "react";
import { useAuth } from './../Hooks/useAuth';
import { Link, Outlet } from 'react-router-dom';

const Admin = () =>
{
    const { fetchData } = useAuth();
    useLayoutEffect( () =>
    {
        fetchData();

    }, [] );
    return (
        <div>
            <na className="flex w-[20vw] justify-between text-xl font-medium">
                <Link to='/admin/newdata'>
                    New Data
                </Link>
                <Link to='/admin/olddata'>
                    Old Data
                </Link>
            </na>
            <Outlet />
        </div>
    );
};

export default Admin;