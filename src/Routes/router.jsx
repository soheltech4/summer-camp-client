import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Home/Login/Login";
import Registration from "../Pages/Home/Registration/Registration";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/AllClasses/AllClasses";

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
  ]);

  export default router