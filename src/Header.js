import { LOGO_URL } from "./utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import {useSelector} from "react-redux";


const Header = () => {
//--deep dive into useState(react-hook) concepts
const [btnswap,setBtnSwap] = useState("login");
const onlineStatus = useOnlineStatus();

const {loginUser} = useContext(UserContext);
//console.log(loginUser);
//context API ------> useContext and create context


//subscribing the store by using selector
const cartItems = useSelector((store)=> store.cart.items);
console.log(cartItems);

    return(
        <div className="flex justify-between bg-stone-100 shadow-lg">
            <div className="logo-component">
                <img className="w-36 rounded-t-full rounded-b-full py-2" src={LOGO_URL}/>
            </div>
            <div className="">
                <ul className="flex p-5 m-5 justify-between text-center font-bold">
                    <li className="px-4 hover:shadow-md">
                        Status : {onlineStatus ? "online🟢" : "offline🔴"}
                    </li>
                    <li className="px-4 hover:shadow-md">
                        <Link to ="/">Home</Link>
                    </li>
                    <li className="px-4 hover:shadow-md">
                    <Link to ="/About">About Us</Link>
                    </li>
                    <li className="px-4 hover:shadow-md">
                    <Link to ="/Contact">Contact US</Link>
                    </li>
                    <li className="px-4 hover:shadow-md">
                    <Link to ="/grocary">Grocary</Link> 
                    </li >
                    <li className="px-4 hover:shadow-md font-bold text-xl"><Link to ="/cart">Cart-({cartItems.length})</Link>
                    </li>
                    <li className=" p-1 rounded-lg w-14 h-8">
                    <button onClick={() => 
                        btnswap === "login" ? setBtnSwap("logout") : setBtnSwap("login")}>{btnswap}</button>
                    </li>
                    <li className="text-lg font-bold px-2 mx-2">
                        <Link to = "/Login" > Sign-In</Link>
                    </li>
                </ul>
            </div>   
        </div>
    )
}


export default Header;