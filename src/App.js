import React from "react";
import {app} from './firebaseConfig'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Alumni from "./Pages/Alumni";
import Achivements from "./Pages/Achivements";
import Gallery from "./Pages/Gallery";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path='/alumni' element={<Alumni/>}/>
                <Route path='/achievements' element={<Achivements/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>
        </BrowserRouter>
    )
}