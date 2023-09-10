import React from "react";
import User from "./User";
import UserClass from "./UserClass";



class About extends React.Component{
    constructor (props){
        super(props);
    }    
    render()
        {
            console.log("parent-render");
            return( 
            <div>
                <h1>Hello User!</h1>
                <h3>We are Team FAST-DELIVERY</h3>
                <User
                    name={"Ashok (Class)"}
                    location={"Hyderabad"} 
                    contact={"_ashok98__"}
                />
            </div>
            ) 
        }
}

export default About;