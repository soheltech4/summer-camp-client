import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);


 
    const onSubmit = (data) => {
        const ClassData = {
            availableSeats: parseFloat(data?.availableSeats), courseName: data?.courseName, image: data?.image,
            instructorName: data?.instructorName, price: parseFloat(data?.price),
            totalSeats: parseFloat(data?.totalSeats), email: user?.email, status: data?.status
        }
        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ClassData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    };

    return (
            <div className='w-full p-2'>
                <div className="m-10 border-2 rounded-lg bg-purple-200 bg-opacity-25 p-5">
                    <h1 className='text-center text-3xl uppercase font-semibold m-2'>ADD A CLASS</h1>
                    <div className="flex-shrink-0 w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            <div className='md:grid md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Class Name</span>
                                    </label>
                                    <input type="text" name="courseName" placeholder="Your Classes Name" {...register('courseName', { required: true })}
                                        className="input w-full input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Instructor Name</span>
                                    </label>
                                    <input type="text" name="instructorName" defaultValue={user?.displayName} placeholder="Instructor Name" {...register('instructorName', { required: true })}
                                        className="input w-full input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Instructor Email</span>
                                    </label>
                                    <input type="text" name="InstructorEmail" defaultValue={user?.email} placeholder="Instructor Email" {...register('InstructorEmail', { required: true })}
                                        className="input w-full input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Total Seats</span>
                                    </label>
                                    <input type="number" name="totalSeats" placeholder="Total Seats" {...register('totalSeats', { required: true })}
                                        className="input w-full input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Seats</span>
                                    </label>
                                    <input type="number" name="availableSeats" placeholder="Available Seats" {...register('availableSeats', { required: true })}
                                        className="input w-full input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" placeholder="Classes Price" {...register('price', { required: true })}
                                        className="input w-full input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Status</span>
                                    </label>
                                    <input type="text" name="status" defaultValue="pending" placeholder="Status" {...register('status', { required: true })}
                                        className="input w-full input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Classes Photo URL</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Input Classes Photo Url" {...register('image', { required: true })}
                                        className="input w-full input-bordered" />
                                </div>
                            </div>

                            <div className="form-control mt-6 mb-5">
                                <input type="submit" className="btn btn-primary w-full text-white" value="ADD CLASS" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default AddClass;