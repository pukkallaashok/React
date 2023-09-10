import { createContext } from "react";


const UserContext = createContext({
    loginUser : "Default user"
});

export default UserContext;