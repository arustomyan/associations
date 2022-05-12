
import HomeUser from './../Pages/HomeUser';
import HomePage from './../Pages/HomePage';


export const privateRoutes = [
    {path: '/', element: <HomeUser/>},
]

export const publicRoutes = [
    {path: '/', element: <HomePage/>},
]
