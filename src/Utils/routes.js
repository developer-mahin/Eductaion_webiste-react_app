import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Root, {} from "../components/Root";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";
import quizLoader from "./quizLoader";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: quizLoader,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/topics',
                element: <Topics></Topics>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])

export default router;