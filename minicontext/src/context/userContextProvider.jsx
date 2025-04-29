import React from "react";
// import { useState } from "react";
import UserContext from "./user.context.js";

const UserContextProvider=({children})=>{

    const [user,setUser]=React.useState(null)

    return(
      
    
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
      

    
    )

}

export default UserContextProvider;