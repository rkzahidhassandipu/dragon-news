import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router'; // Make sure it's 'react-router-dom'
import { AuthContext } from './AuthProvider'; // Adjust based on your actual export
import Loader from '../Components/IsLoader/Loader';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader />
    }
    if (user && user?.email) {
        return children;
    }
    
    return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRouter;
