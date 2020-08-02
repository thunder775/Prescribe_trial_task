import React, {useContext} from "react";
import {UserContext} from "../contexts/user_context";

export default function ProFilePage(props) {

    let {user, _} = useContext(UserContext);
    return (
        <div>
            Name : {user.name} <br/>
            Email : {user.email}<br/>
            DOB : {user.dob}<br/>
            Address : {user.address}<br/>
            BloodGroup : {user.bloodGroup}<br/>
        </div>
    )
}