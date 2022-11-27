import React from "react";
import { Link } from "react-router-dom";

export default function Banner({title,link,buttonText}){
    return(
        <div className="banner-section home-banner">
            <div className="inner-banner-section">
                <h1 className="inner-banner-section-title">{title}</h1>
                <Link to={link} className="inner-banner-section-button">{buttonText}</Link>
            </div>
            <div className="inner-banner-section-image">
                <img src="/img/logo1.png" className="inner-banner-section-image-img"/>
            </div>
        </div>
    )
}