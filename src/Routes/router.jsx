import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Home/Login/Login";
import Registration from "../Pages/Home/Registration/Registration";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllClassAdmin from "../Pages/Dashboard/AllClassAdmin";
import AddClass from "../Pages/Instructors/AddClass";
import MyClasses from "../Pages/Instructors/MyClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path : "/",
          element : <Home></Home>
        },
        {
          path : "/all-instructors",
          element : <Instructors></Instructors>
        },
        {
          path : "/all-classes",
          element : <AllClasses></AllClasses>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/registration',
          element : <Registration></Registration>
        }
      ]
    },
    {
      path: 'dashboard',
      element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path : 'myselectedclass',
          element : <MySelectedClass></MySelectedClass>
        },
        {
          path : 'allusers',
          element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path : 'manageclasses',
          element : <AdminRoute><AllClassAdmin></AllClassAdmin></AdminRoute>
        },
        {
          path : 'addclass',
          element : <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path : 'myclasses',
          element : <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        }
      ]
    }
  ]);

  export default router