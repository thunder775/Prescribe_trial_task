import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import MainPage from "./main_page";

const themeColor = {background: '#2E3B55'};

function App() {
    return (
        <Router>
            <div className="everything">
                <Switch>
                    <Route path={""} component={MainPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
