import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Destination from "../pages/Destination";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Main from "../layout/Main";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Booking from "../pages/Booking";
import Resorts from "../resort/Resorts";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/news',
                element: <News></News>
            },
            {
                path: '/destination',
                element: <Destination></Destination>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/resort',
                element: <PrivateRoutes><Resorts></Resorts></PrivateRoutes>,
                loader: ({params}) => fetch('http://localhost:5000/resort')
            }
        ]
    }
])

export default router;