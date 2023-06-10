import React from 'react';
import { FaBook, FaCartPlus, FaHome, FaPersonBooth } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side   bg-purple-300">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className='flex justify-center mt-5'>
                    <img src="https://i.ibb.co/XjY7ZKn/martial-master-logo.png" className='w-32' alt="" />
                </div>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    <li className='uppercase'><Link><FaHome></FaHome>Student Home</Link></li>
                    <li className='uppercase'><Link to="/dashboard/myselectedclass"><FaCartPlus></FaCartPlus>My Selected Class</Link></li>
                    <li className='uppercase'><Link><FaBook></FaBook>My Enrollment Class</Link></li>
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