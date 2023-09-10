import React from "react";
import { useState,useContext } from "react";
//import UserContext from "./UserContext";
const User = (props) => {

    const {name,location,contact} = props;
    const [count,setCount] = useState(0);

   //const {loginUser} = useContext(UserContext);

    return(
        <div className="user-card">
            <h1>Count = {count} </h1>
            <button onClick={()=>
                {
                    count:setCount(count+1);
                }
            }>count++
            </button>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            {/* <h4>User : {loginUser}</h4> */}
            <h4>Contact:{contact}</h4>
        </div>
    )
}

export default User;