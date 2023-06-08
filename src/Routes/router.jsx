import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Home/Login/Login";

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
          path : '/login',
          element : <Login></Login>
        }
      ]
    },
  ]);

  export default router