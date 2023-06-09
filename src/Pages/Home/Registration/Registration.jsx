import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../../../SocialLogin/SocialLogin';

const Registration = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { CreateUser, userUpdate } = useContext(AuthContext);
    const [error, setError] = useState("")
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        if (data.password === data.matchPassword) {
            CreateUser(data.email, data.password)
                .then((result) => {
                    userUpdate(data.name, data.photo)
                    const user = result.user;
                    Swal.fire({
                        title: 'Registration Successfully',
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
        }
        else {
            return setError("Password does not match")
        }

    };



    return (
        <div className="hero min-h-screen">
            <div className="md:flex justify-center items-center gap-10">
                <div className="md:w-1/2 w-full text-center lg:text-left">
                    <img src="https://i.ibb.co/tXRXLj0/login-page-4468581-3783954.webp" alt="" />
                </div>
                <div className="flex-shrink-0 w-full max-w-sm">
                    <h1 className="text-2xl text-center font-bold mb-5">Please Registration!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className='md:grid md:grid-cols-2 gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    {...register('name', { required: true })}
                                    className="input w-full input-bordered"
                                />
                                {errors.name?.type === 'required' && <p className="text-red-600">Input Your Name</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    {...register('email', { required: true })}
                                    className="input w-full input-bordered"
                                />
                                {errors.email?.type === 'required' && <p className="text-red-600">Input Email Address</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Password"
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                                    })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password must be 6 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">Password must be one uppercase, one special character</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="text"
                                    name="matchPassword"
                                    placeholder="Password"
                                    {...register('matchPassword', { required: true })}
                                    className="input w-full input-bordered"
                                />
                                <p className="text-red-600">{error}</p>
                                {/* {errors.matchPassword?.type === 'required' && <p >Confirm Password</p>} */}
                            </div>
                        </div>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Input Your Photo Url"
                                    {...register('photo', { required: true })}
                                    className="input w-full input-bordered"
                                />
                                {errors.photo?.type === 'required' && <p className="text-red-600">Input Your Photo URL</p>}
                            </div>
                        <div className="form-control mt-6 mb-5">
                            <input type="submit" className="btn btn-primary w-full text-white" value="Registration" />
                        </div>
                    </form>
                    <h1 className='text-center'>Have an Account? Please <a className='text-orange-500 mt-10 mb-10'><Link to="/login">Login</Link></a></h1>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Registration;