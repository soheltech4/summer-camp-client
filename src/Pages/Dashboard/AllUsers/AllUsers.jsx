import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

import './AllUsers.css'; // Import the CSS file for custom styling

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('https://martial-mastery-server.vercel.app/users');
    return res.json();
  });
  console.log(users);

  const [disabledAdminButtons, setDisabledAdminButtons] = useState([]);
  const [disabledInsturctorButtons, setDisabledInstructorButtons] = useState([]);

  const handleMakeAdmin = (student) => {
    fetch(`https://martial-mastery-server.vercel.app/users/admin/${student?._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-start',
            icon: 'success',
            title: `${student?.name} is now an admin`,
            showConfirmButton: false,
            timer: 1500
          });
          setDisabledAdminButtons([...disabledAdminButtons, student._id]);
        }
      });
  };

  const handleMakeInstructor = (student) => {
    fetch(`https://martial-mastery-server.vercel.app/users/instructor/${student?._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-start',
            icon: 'success',
            title: `${student?.name} is now an instructor`,
            showConfirmButton: false,
            timer: 1500
          });
          setDisabledInstructorButtons([...disabledInsturctorButtons, student._id]);
        }
      });
  };

  const handleDelete = student  => {
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
          fetch(`https://martial-mastery-server.vercel.app/users/${student?._id}`, {
            method : "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
                refetch()
                Swal.fire(
                    'Deleted!',
                    'User has been deleted.',
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
        <h1 className='text-3xl uppercase font-semibold mr-36'>Total Users : {users?.length}</h1>
      </div>
      <div className='h-full w-full ml-20'>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className='uppercase'>
                <th>#</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((student, index) => (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student?.name}</td>
                  <td>{student?.email}</td>
                  <td className=''>
                    <div className='grid grid-rows-2'>
                      <button
                        onClick={() => handleMakeAdmin(student)}
                        className={`bg-purple-600 p-1 mb-1 rounded-md text-white ${student.role === 'admin' || disabledAdminButtons.includes(student._id) ? 'disabled' : ''
                          }`}
                        disabled={student.role === 'admin' || disabledAdminButtons.includes(student._id)}
                      >
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleMakeInstructor(student)}
                        className={`bg-blue-600 p-1 mb-1 rounded-md text-white ${student.role === 'instructor' || disabledInsturctorButtons.includes(student._id) ? 'disabled' : ''
                          }`}
                        disabled={student.role === 'instructor' || disabledInsturctorButtons.includes(student._id)}
                      >
                        Make Instructor
                      </button>
                    </div>
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(student)} className='bg-purple-600 p-3 rounded-md text-white'>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;