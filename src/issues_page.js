import React, {useEffect, useState} from "react";
import IssueTile from "./issue_tile";

const url = 'ws://localhost:7770';

export default function IssuesPage(props) {

    const socket = new WebSocket(url);
    useEffect(() => {
        socket.onopen = () => {
            console.log('connected');
        }
        socket.onmessage = (msg) => {
            console.log(JSON.parse(msg.data));
        }
        socket.onclose = () => {
            console.log("connection closed")
        }
    });
    let [issues, updateIssues] = useState([]);

    return (
        <div>
            <IssueTile/>
            <IssueTile/>
            <IssueTile/>
            <IssueTile/>
        </div>
    )


}
