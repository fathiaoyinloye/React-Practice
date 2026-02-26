import {createBrowserRouter} from "react-router";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Products from "../store/products/Products";

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
        element: <Register/>
    },
    {
        path:"/products",
        element: <Products/>

    }
])


export default router;