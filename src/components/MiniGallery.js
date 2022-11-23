import React from "react";

export default function MiniGallery(){
    return(
        <div className="minigallery-section">
            <div className="minigallery-h-section">
                <h1 className="minigallery-h">Gallery</h1>
                <div className="minigallery-h-underline"></div>
            </div>
            <div class="minigallery"> 
                <div class="minigal-column">
                    <img src="/img/logo1.png"/>
                    <img src="/img/proposalr.jpg"/>
                    <img src="/img/sample/sample1.jpg"/>
                    <img src="/img/logo2.png"/>
                </div>
                <div class="minigal-column">
                    <img src="/img/sample/sample1.jpg"/>
                    <img src="/img/logo2.png"/>
                    <img src="/img/logo1.png"/>
                    <img src="/img/proposalr.jpg"/>
                </div>  
                <div class="minigal-column">
                    <img src="/img/sample/sample1.jpg"/>
                    <img src="/img/logo1.png"/>
                    <img src="/img/logo2.png"/>
                    <img src="/img/proposalr.jpg"/>
                </div>
            </div>
            <div className="minigallery-view-more">
                <a href="#" className="minigallery-view-more-a">View More</a>
            </div>
        </div>
    )
}