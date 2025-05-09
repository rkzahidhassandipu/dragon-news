import React from 'react'

import { createBrowserRouter } from "react-router";
import App from '../App';
import Home from '../pages/Home/Home';
import HomeLayout from '../Layout/HomeLayout/HomeLayout';
import CategoryNews from '../pages/CategoryNews/CategoryNews';
import Authatication from '../Layout/Authatication/Authatication';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NewsDetils from '../Components/NewsDetails/NewsDetils';
import PrivateRouter from '../provider/PrivateRouter';
import Loader from '../Components/IsLoader/Loader';



export const router = createBrowserRouter([
    {
      path: "/",
      Component: App,
      children: [
        { index: true, Component:  Home},
        {
          path: "/category/:id",
          Component: CategoryNews,
          loader: () => fetch("/news.json"),
          hydrateFallbackElement: Loader
        }
        
      ],
    },
    
    {
      path: "/auth",
      Component: Authatication,
      children: [
        {
          path: "/auth/login",
          Component: Login
        },
        {
          path: "/auth/register",
          Component: Register
        }
      ]
     },
     {
      path: '/news-details/:id',
      element: <PrivateRouter>
        <NewsDetils />
      </PrivateRouter>,
      loader: () => fetch("/news.json"),
      hydrateFallbackElement: Loader
     }
  ]);
  ;

