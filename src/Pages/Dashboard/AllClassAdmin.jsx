import React from 'react';
import useSelectClass from '../../Hooks/useSelectClass';
import Swal from 'sweetalert2';
import UseAllClasses from '../../Hooks/useAllClasses';
import { FaTrashAlt } from 'react-icons/fa';

const AllClassAdmin = () => {
    const [allClasses] = UseAllClasses()

    const handleDelete = SData => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/all-classes/${SData?._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <>
            <div className='flex justify-between mt-10 mb-10'>
                <h1 className='text-3xl uppercase font-semibold mr-36'>Total Class : {allClasses?.length}</h1>
            </div>
            <div className='h-full w-full ml-20'>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className='uppercase'>
                                <th>#</th>
                                <th>Class</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allClasses.map((SData, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={SData?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    {/* Class Image, Class name, Instructor name, Instructor email, Available seats, 
                                    Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback). */}
                                    <td>{SData?.courseName}</td>
                                    <td>{SData?.instructorName}</td>
                                    <td>{SData?.instructorEmail}</td>
                                    <td>{SData?.availableSeats}</td>
                                    <td>${SData?.price}</td>
                                    <td className='grid grid-cols-1'>
                                        <button className='bg-blue-600 p-1 mb-1 rounded-md text-white'>Pending</button>
                                        <button className='bg-purple-600 p-1 mb-1 rounded-md text-white'>Approved</button>
                                        <button className='bg-green-600 p-1 mb-1 rounded-md text-white'>Denied</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(SData)} className='bg-purple-600 p-3 rounded-md text-white'><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllClassAdmin;