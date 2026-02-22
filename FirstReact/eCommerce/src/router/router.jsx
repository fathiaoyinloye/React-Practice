import {createBrowserRouter} from "react-router";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";

const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>

    },

    {
        path:"/register",
        element:<Register/>

    },

    {
        path: "/",
        element: <Login/>
    }
])


export default router;