import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import './index.css';
import AppLayout from './App';
import Body from './Body';
import About from './utils/About';
import Contact from './utils/Contacts';
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import reportWebVitals from './reportWebVitals';
import Grocary from "./utils/Grocary";
import CartStore from "./CartStore";
import LoginPage from "./LoginPage";

//const Grocary = lazy(() => import("./src/utils/Grocary"));

const AppRouter = createBrowserRouter([
  {
      
      path : "/",
      element : <AppLayout/>,
      children :[
              {
      path : "/",
      element : <Body/>
  },
          {
      path : "/About",
      element : <About/>
  },
  {
      path : "/Contact",
      element : <Contact/>
  },
  {
      path : "/grocary",
      element : <Grocary/>
  },
  {
      path : "/restaurants/:resId",
      element : <RestaurantMenu/>
  },
  {
    path : "/cart",
    element : <CartStore/>
    },
    {
        path : "/Login",
        element : <LoginPage/>
    }
      ],
      errorElement:<Error/>
  }
]);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={AppRouter}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
