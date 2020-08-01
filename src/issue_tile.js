import React from "react";

export default function IssueTile(props) {
    return (
        <div>
            <div className={"issue-tile"}>
                {/*<legend>Issue-01</legend>*/}
                <div className={"issue-text"}>
                    I'm an issue solve me
                </div>
                <div className={"issue-tile-details"}>
                    <p style={{paddingRight: "20px"}}>Created On: 12 July 1997</p>
                    <p>Created By: John</p></div>
            </div>
        </div>
    )
}