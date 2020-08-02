import React from 'react';
import './App.css';
import MainPage from "./components/main_page";
import UserContextProvider from "./contexts/user_context";

function App() {
    return (
        <UserContextProvider>
            <MainPage/>
        </UserContextProvider>
    )
}

export default App;
