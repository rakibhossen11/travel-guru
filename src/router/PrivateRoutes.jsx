import React, { useContext } from 'react';
import { AuthContext } from '../provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to='/login'></Navigate> ;
};

export default PrivateRoutes;