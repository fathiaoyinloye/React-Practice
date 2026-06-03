import {createBrowserRouter} from "react-router";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Products from "../store/products/Products";
import LandingPage from "../components/pages/LandingPage";

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
        path:"/landingpage",
        element: <LandingPage/>

    },
    {
        path:"/navbar",
        element: <NavBar/>

    }
])


export default router;