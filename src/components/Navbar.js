import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <header>
            <nav>
                <input type="checkbox" id="check"/>
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo"><a href="#main">Test</a></label>
                <ul>
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/alumni">Alumni</Link></li>
                    <li><Link to="/achievements">Achievements</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
        </header>
    )
}