import React from 'react';
import { FaBook, FaCartPlus, FaHome, FaPersonBooth, FaUser, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import useAuth from '../Hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth()

    // const isAdmin = true

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side   bg-purple-300">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 mb-56 text-base-content">
                    <div className='flex justify-center mt-5 text-center'>
                        {
                            isAdmin ?
                                (
                                    <div className='grid grid-row-1 justify-end p-5 bg-purple-700 rounded-lg text-white text-center'>
                                        <img src={user?.photoURL} className='rounded-full w-28' alt="" />
                                        <h1 className='uppercase text-2xl'>{user?.displayName}</h1>
                                        <h1>Email: {user?.email}</h1>
                                        <h1 className='bg-red-500 mt-2 rounded-lg uppercase'>Admin</h1>
                                    </div>
                                )
                                : isInstructor ?
                                    (
                                        <div className='items-center p-5 bg-purple-700 rounded-lg text-white text-center grid-row-1'>
                                            <img src={user?.photoURL} className='rounded-full w-28' alt="" />
                                            <h1 className='uppercase text-2xl'>{user?.displayName}</h1>
                                            <h1>Email: {user?.email}</h1>
                                            <h1 className='bg-red-500 mt-2 rounded-lg uppercase'>INSTRUCTOR</h1>
                                        </div>
                                    )
                                    :
                                    <div className='items-center p-5 bg-purple-700 rounded-lg text-white text-center grid-row-1'>
                                        <img src={user?.photoURL} className='rounded-full w-28' alt="" />
                                        <h1 className='uppercase text-2xl'>{user?.displayName}</h1>
                                        <h1>Email: {user?.email}</h1>
                                        <h1 className='bg-red-500 mt-2 rounded-lg uppercase'>Student</h1>
                                    </div>
                        }
                    </div>
                    {
                        isAdmin ?
                            (
                                <>
                                    <li className='uppercase'><Link><FaHome></FaHome>Admin Home</Link></li>
                                    <li className='uppercase'><Link to="/dashboard/manageclasses"><FaCartPlus></FaCartPlus>Manage Classes</Link></li>
                                    <li className='uppercase'><Link to="/dashboard/allusers"><FaPersonBooth></FaPersonBooth> All Users</Link></li>
                                    <li className='uppercase'><Link><FaWallet></FaWallet> Payment History</Link></li>
                                </>
                            )
                            : isInstructor ?
                                (
                                    <>
                                        <li className='uppercase'><Link><FaHome></FaHome>Instructor Home</Link></li>
                                        <li className='uppercase'><Link><FaHome></FaHome>Add A Class</Link></li>
                                        <li className='uppercase'><Link><FaHome></FaHome>My Classes</Link></li>
                                    </>
                                )
                                :
                                <>
                                    <li className='uppercase'><Link><FaHome></FaHome>Student Home</Link></li>
                                    <li className='uppercase'><Link to="/dashboard/myselectedclass"><FaCartPlus></FaCartPlus>My Selected Class</Link></li>
                                    <li className='uppercase'><Link><FaBook></FaBook>My Enrollment Class</Link></li>
                                    <li className='uppercase'><Link><FaWallet></FaWallet> Payment History</Link></li>
                                </>
                    }
                    <div className="divider"></div>
                    <li className='uppercase'><Link to="/"><FaHome></FaHome>Home</Link></li>
                    <li className='uppercase'><Link to='/all-instructors'><FaPersonBooth></FaPersonBooth> Instructors</Link></li>
                    <li className='uppercase'><Link to='/all-classes'><FaBook></FaBook> All Classes</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;