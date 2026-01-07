import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import HomeLayout from '../Layouts/HomeLayout';
import Plants from '../pages/Plants';
import MyProfile from '../pages/MyProfile';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PlantCardDetails from '../components/PlantCards.jsx/PlantCardDetails';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
    {

        path: '/',
        element: <HomeLayout />,

        children: [
            {
                path: "",
                element: <Home />,
                loader: () => fetch('/plantData.json'),
            },
            {
                path: '/plants',
                element: <Plants />,
                loader: () => fetch('/plantData.json'),
            },
            {
                path: '/myprofile',
                element: <PrivateRoute>
                    <MyProfile />
                </PrivateRoute>
            },
           
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            },
        ]
    },
     {
                path: '/details/:id',
                element: <PrivateRoute>
                    <PlantCardDetails/>
                </PrivateRoute>,
                loader: ()=>fetch('/plantData.json')
            }
])

export default Router;