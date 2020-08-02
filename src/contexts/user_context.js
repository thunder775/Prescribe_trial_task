import React, {createContext, useState} from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
    let [user, updateUser] = useState({isLogged: false})
    return (
        <UserContext.Provider className="Provider" value={{user, updateUser}}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserContextProvider




