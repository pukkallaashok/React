import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true); 
    useEffect(() => {

        window.addEventListener("offline",() =>{
            console.log("online");
            setOnlineStatus(false);
        });

        window.addEventListener("online",() =>{
            console.log("offline");
            setOnlineStatus(true);
        });
    },[])

    return onlineStatus;
}



export default useOnlineStatus;