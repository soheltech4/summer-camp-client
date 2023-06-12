import React, { useContext } from 'react';
import useInstructor from '../Hooks/useInstructor';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation } from 'react-router-dom';

const InstructorRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;