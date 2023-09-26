export const  checkValidata = (email,password) =>{

    const isValidemail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidemail) return "Invalid EmailId";
    if(!isValidpassword) return "Ivalid Password";

   return null; 
}