import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
// import Loader from "./UI/Loader/Loader";
import HomeUser from './Pages/HomeUser';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import RegistrationPage from './Pages/RegistrationPage';
import RoomPage from './Pages/RoomPage';

const AppRouter = () => {
    // const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

    const isLoading = false
    
    // if (isLoading) {
    //     return <Loader/>
    // }

    const isAuth = false

    return (
        isAuth
            ?
            <Routes>
                {/* {privateRoutes.map(route =>
                <Route
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />)} */}
                <Route path="/"   key='1'    element={<HomeUser />} />
            </Routes>
            :
            <Routes>
                {/* {publicRoutes.map(route =>
                    <Route
                        path='/'
                        element={route.element}
                        key={route.path}
                    />)} */}
                <Route path="/"   key='1'    element={<HomeUser />} />
                <Route path="/sign-in"   key='2'    element={<SignInPage />} />
                <Route path="/registration"   key='3'    element={<RegistrationPage />} />
                <Route path="/room"   key='4'    element={<RoomPage />} />
            </Routes>


    );
};

export default AppRouter;
