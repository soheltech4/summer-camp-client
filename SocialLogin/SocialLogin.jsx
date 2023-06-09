import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SocialLogin = () => {
    const { signWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleSignWithGoogle = () => {
        signWithGoogle()
            .then(result => {
                const loggedGoogleUser = result.user
                console.log(loggedGoogleUser)
                // const saveUser = { name: loggedGoogleUser.displayName, email: loggedGoogleUser.email }
                // fetch('http://localhost:5000/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(saveUser)
                // })
                    // .then(res => res.json())
                    // .then(()=> {
                    //     
                    // })
                navigate(from, { replace: true })
            })
            .then(error => {
                console.log(error)
            })
    }
    return (
        <div className='text-center justify-center mt-10'>
            <div className="divider">Or Sign In With</div>
                <button onClick={handleSignWithGoogle} className="btn btn-primary text-white w-full"><FaGoogle></FaGoogle>
                Google</button>
        </div>
    );
};

export default SocialLogin;