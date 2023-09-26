import { useRef, useState } from "react";
import { Sigin_url } from "./utils/constants";
import { checkValidata } from "./utils/Validate";
import { auth } from "./utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

const LoginPage = () => {



    const [isSignIn,setIsSignIn] = useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name =useRef(null);

    const handleClickSignIn = () => {
        const message = checkValidata(email.current.value,password.current.value);
        setErrorMessage(message);

        if(!isSignIn){
                        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //setErrorMessage(errorCode+"-"+errorMessage);
            });


        }
        else{
                        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }
    }

    
    

    const toggleSignin =() =>{
        setIsSignIn(!isSignIn);
    } 


    return (
        <div className="flex bg-gray-400 absolute">
            
            <div className="opacity-90">
                <img src={Sigin_url} 
                alt="img" className=" rounded-r-lg h-full w-fit"></img>
            </div>
            <div className="m-auto p-auto "> 
            <form onSubmit={(e)=>e.preventDefault()} className=" bg-neutral-300 py-6 px-16 m-8 h-auto rounded-3xl shadow-black shadow-2xl align-middle">
            <h1 className="text-3xl  m-3 p-2 font-bold">{!isSignIn?"SignUp":"SignIn"}</h1>
            {!isSignIn && <input ref={name} type="text" placeholder="Name" className=" m-3 py-2 px-8 border border-x-slate-300 rounded-xl text-center shadow-2xl shadow-black"/>}
                <input type="text" ref={email} placeholder="Email" className="m-3 py-2 px-8 border border-x-slate-300 rounded-xl text-center shadow-2xl shadow-black"/>
                <input type="password" ref={password} placeholder="password" className="m-3 py-2 px-8 border border-x-slate-300 rounded-xl text-center shadow-2xl shadow-black"/>
                <p className="text-red-600 m-2  font-bold">{errorMessage}</p>
                <button  className=" py-2 px-24 m-4  bg-purple-400 rounded-xl text-center shadow-2xl shadow-black" onClick={handleClickSignIn}>{isSignIn?"SignIn":"SignUp"}</button>
                <p className="p-2 m-2 font-extralight cursor-pointer" onClick={toggleSignin}>{isSignIn?"Are you Starving? Sign Up to get Stuffed":"Alresdy a member? Login Now"}</p>
            </form>
            </div>
        </div>
    )
}

export default LoginPage;