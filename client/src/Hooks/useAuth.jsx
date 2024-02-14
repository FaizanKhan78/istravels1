import { useContext } from "react";
import { AuthContext } from "../store/auth";

// ! Consumer.
export const useAuth = () =>
{
    const AuthContextValue = useContext( AuthContext );
    if ( !AuthContextValue )
    {
        throw new Error( "useAuth used outside of the Provider" );
    }
    return AuthContextValue;
};