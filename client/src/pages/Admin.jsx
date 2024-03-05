import { useLayoutEffect } from "react";
import { useAuth } from './../Hooks/useAuth';
import AdminTable from "../components/AdminTable";

const Admin = () =>
{
    const { fetchData } = useAuth();
    useLayoutEffect( () =>
    {
        fetchData();

    }, [] );
    return (
        <div>
            {/* <Outlet /> */ }
            <AdminTable />
        </div>
    );
};

export default Admin;