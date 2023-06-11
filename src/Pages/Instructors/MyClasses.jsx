import React from 'react';
import useMyAddedClasses from '../../Hooks/useMyAddedClasses';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';

const MyClasses = () => {
    const [refetch, MyAddedClasses] = useMyAddedClasses()
    console.log(MyAddedClasses)

    const handleDelete = SData  => {
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
              fetch(`http://localhost:5000/classes/${SData?._id}`, {
                method : "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your Class has been deleted.',
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
            <h1 className='text-3xl uppercase font-semibold mr-36'>Total Class : {MyAddedClasses?.length}</h1>
        </div>
        <div className='h-full w-full ml-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='uppercase'>
                            <th>#</th>
                            <th>Class</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MyAddedClasses.map((SData, index) =>
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
                                <td>{SData?.courseName}</td>
                                <td>{SData?.instructorName}</td>
                                <td>{SData?.availableSeats}</td>
                                <td>${SData?.price}</td>
                                <td>
                                    <button onClick={()=>handleDelete(SData)} className='bg-purple-600 p-3 rounded-md text-white'><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
};

export default MyClasses;