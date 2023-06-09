import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    console.log(user)
    const navBar =
        <>
            <li><Link>Home</Link></li>
            <li><Link to="/all-instructors">Instructors</Link></li>
            <li><Link to="/all-classes">Classes</Link></li>
            <li><Link>Dashboard</Link></li>
        </>

    const LogIn =
        <>
            {
                user ?
                    <>
                        <div className="avatar mr-5 tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <Link><button onClick={handleLogOut} className="btn">Log Out</button></Link>
                    </> :
                    <>
                        <Link to="/login"><button className="btn">Login</button></Link>
                    </>
            }
        </>
    return (
        <div className='navbar max-w-screen-2xl fixed z-10 bg-opacity-30 md:text-white rounded-3xl bg-black justify-center'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 text-lg font-semibold shadow bg-base-100 rounded-box w-52">
                            {navBar}
                        </ul>
                    </div>
                    <Link to="/"><img className='w-16' src="https://i.ibb.co/XjY7ZKn/martial-master-logo.png" alt="" /></Link>
                    {/* <Link to="/" className="normal-case text-xl font-semibold"><span className='py-1 px-2 bg-black text-white rounded-md'>Martial</span> <span className='text-red-600'>Mastery</span></Link> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                        {navBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {LogIn}
                </div>
        </div>
    );
};

export default Navbar;