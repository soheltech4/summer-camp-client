import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { LogIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        LogIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    title: 'Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown',
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp',
                    },
                });
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="hero min-h-screen">
            <div className="md:flex justify-center items-center">
                <div className="md:w-1/2 w-full text-center lg:text-left">
                    <img src="https://i.ibb.co/tXRXLj0/login-page-4468581-3783954.webp" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-2xl text-center font-bold">Please Login!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                {...register('email', { required: true })}
                                className="input w-full input-bordered"
                            />
                            {errors.email?.type === 'required' && <p className="text-red-600">Input Email Address</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="password"
                                    {...register('password', { required: true })}
                                    className="input absolute input-bordered w-5/6"
                                />
                                <button className="relative ml-72 mt-4" onClick={togglePasswordVisibility}>
                                    <FaEye />
                                </button>
                                {errors.password?.type === 'required' && <p className="text-red-600 mt-2">Input Password</p>}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary w-full" value="Login" />
                        </div>
                    </form>
                    <h1 className='text-center'>New here? <a className='text-orange-500'><Link to="/registration">Create a New Account</Link></a></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;
