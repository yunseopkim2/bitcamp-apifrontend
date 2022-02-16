import React from "react";
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Bmi from "./hello/Bmi";
import Calc from "./hello/Calc";
import Grade from "./hello/Grade";
import Hello from "./hello/Hello";
import Home from "./hello/Home";
import Login from "./hello/Login";
const App = () => {
    return(
        <div>
        <Router>
        <Routes>
        <Route expected path="/" element= {<Home/>}/>
        <Route path = "/hello" element={<Hello/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/calc" element={<Calc/>}/>
        <Route path = "/bmi" element={<Bmi/>}/>
        <Route path = "/grade" element={<Grade/>}/>
        </Routes>
        </Router>
        </div>
    )
}
export default App;
