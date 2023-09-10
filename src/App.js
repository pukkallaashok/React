        import React, { lazy,Suspense, useEffect, useState } from "react";
        import ReactDOM from "react-dom/client";
        import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
        import Header from "./Header";
        //import Body from "./src/Body";
        //import About from "./src/utils/About"
        //import Contact from "./src/utils/Contact";
        //import Error from "./src/Error";
        //import RestaurantMenu from "./src/RestaurantMenu";
        import UserContext from "./utils/UserContext";
        //import Grocary from "./src/utils/Grocary";
        


        const AppLayout = () => {

            const [userInfo,setUserInfo]=useState();

        useEffect(()=>{
            const data = {
                name:"Ashokkumar"
            };
            setUserInfo(data.name);
        },[]);
            return(

                

                <UserContext.Provider value={{loginUser:userInfo,setUserInfo}}>
                    <div className="app">
                        <Header/>
                        <Outlet/>
                    </div>   
                </UserContext.Provider>  
            );
        };


export default AppLayout;        
