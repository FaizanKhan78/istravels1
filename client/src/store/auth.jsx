import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

// ! Create.
export const AuthContext = createContext();

// ! Provider.
export const AuthContextProvider = ( { children } ) =>
{
    //! Token Is Define To Store the Value of The JWT Token.
    const [ token, setToken ] = useState( localStorage.getItem( 'token' ) );
    const [ user, setUser ] = useState( "" );
    const [ toggleButton, setToggleBUtton ] = useState( false );
    const [ allUserData, setAllUserData ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );
    //? Storing The JWT Token TO Local Storage.
    function storeTokenInLocalStorage ( serverToken )
    {
        setToken( serverToken );
        return localStorage.setItem( "token", serverToken );
    }

    const LogoutUser = () =>
    {
        setToken( "" );
        setUser( "" );
        return localStorage.removeItem( 'token' );
    };

    const isLoggedIN = !!token;

    //* JWT AUTHENTICATION - to get the currently user Data.
    async function userAuthentication ()
    {
        await axios.get( "http://localhost:9000/api/auth/payment", {
            headers: {
                Authorization: `Bearer ${ token }`,
            }
        } ).then( ( res ) =>
        {
            setUser( res.data );
            setIsLoading( false );
        } ).catch( error =>
        {
            toast.error( error.response );
            setIsLoading( false );
        } );
    }

    const [ data, setData ] = useState( [] );

    // ? Fetching All the Data.
    const fetchData = async () =>
    {
        try
        {
            const res = await axios.get( "http://localhost:9000/admin/getAllNewData", {
                headers: {
                    Authorization: `Bearer ${ token }`,
                }
            } );
            // ? Setting the Status "True" Value to AllUserData.
            setAllUserData( res.data );
            setData( res.data );
        } catch ( error )
        {
            toast.error( error.response.data.message );
            // console.log( error );
        }
    };

    // ? Deleting the single User.
    const deleteUser = async ( id ) =>
    {
        try
        {
            const res = await axios.delete( `http://localhost:9000/admin/delete/${ id }`, {
                headers: {
                    Authorization: `Bearer ${ token }`,
                }
            } );
            setAllUserData( allUserData.filter( ( user ) => user._id !== id ) );
            toast.success( res.data.msg );
            fetchData();
        } catch ( error )
        {
            toast.error( error.response.data );
        }
    };



    // ! Showing the Active Status.
    const showActiveUser = () =>
    {
        fetchData();
        const users = data.filter( ( user ) => { return user.status === true; } );
        setAllUserData( users );
        setToggleBUtton( false );
    };

    // ! Showing the Pending Status.
    const showPendingUser = () =>
    {
        const users = data.filter( ( user ) => { return user.status === false; } );
        setAllUserData( users );
        setToggleBUtton( true );
    };

    const handleApproved = async ( number ) =>
    {
        const payload = {
            status: true,
        };
        try
        {
            await axios.patch( `http://localhost:9000/admin/updateSingle/${ number }`, payload, {
                headers: {
                    Authorization: `Bearer ${ token }`,
                }
            } );
            setAllUserData( allUserData.filter( ( user ) => user.mobile_number !== number ) );
            // fetchData();
        } catch ( error )
        {
            toast.error( error );
        }
    };
    useEffect( () =>
    {
        userAuthentication();
    }, [ token ] );

    const payload = {
        storeTokenInLocalStorage,
        LogoutUser,
        isLoggedIN,
        user,
        data,
        token,
        toggleButton,
        allUserData,
        isLoading,
        showActiveUser,
        showPendingUser,
        handleApproved,
        deleteUser,
        fetchData,
        setAllUserData,
        userAuthentication,
    };
    return (
        <AuthContext.Provider value={ payload }>
            { children }
        </AuthContext.Provider>
    );
};
