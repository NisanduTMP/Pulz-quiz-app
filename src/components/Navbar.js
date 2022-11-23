import React from "react";

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
                    <li><a className="active" href="#main">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}