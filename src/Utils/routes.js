import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Root, { } from "../components/Root";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz")
        },
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
                path: '/quiz/:id',
                loader: ({params}) =>{
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element: <Quiz></Quiz>
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