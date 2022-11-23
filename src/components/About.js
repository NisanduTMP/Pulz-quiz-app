import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about">
            <div className="about-h-section">
                <h1 className="about-h">About Us</h1>
                <div className="about-h-underline"></div>
            </div>
            <div className="about-inner">
                <div className="about-img">
                    <img src="/img/logo1.png" className="about-img-img"/>
                </div>
                <div className="about-text">
                    <p className="about-text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to="/about" className="about-text-a">View More</Link>
                </div>
            </div>
        </div>
    )
}