import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const AllUsers = () => {
    const {data: users =[], refetch} = useQuery(['users'], async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    console.log(users)

const handleMakeAdmin = (id) =>{
    
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
                            {users.map((student, index) =>
                                <tr key={student._id}>
                                    <td>{index + 1}</td>
                                    <td>{student?.name}</td>
                                    <td>{student?.email}</td>
                                    <td>{ student.role === 'admin' ? 'admin' : 
                                    <button onClick={()=>handleMakeAdmin(student?._id)} className='bg-purple-600 p-3 rounded-md text-white'>Student</button>   
                                    }</td>
                                    <td>
                                        <button className='bg-purple-600 p-3 rounded-md text-white'><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;