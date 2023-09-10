import { useContext } from "react";
import UserContext from "./UserContext";
 
const Grocary = () => {

    const {loginUser} = useContext(UserContext);
    return(
        <>
        <h1>Here is the Grocary component We have more Grocary components here !! </h1>
        <h3>{loginUser}</h3>
        </>
        
    )
}

export default Grocary;