import React, {useContext} from "react";
import CustomAppBar from "./app_bar";
import SignUp from "./sign_up";
import {UserContext} from "../contexts/user_context";
import ProFilePage from "./profilePage";


export default function MainPage() {
    const {user, _} = useContext(UserContext)
    return (
        <div>
            <CustomAppBar/>
            {!user.isLogged && <SignUp/>}
            {user.isLogged && <ProFilePage/>}
        </div>
    )
}

