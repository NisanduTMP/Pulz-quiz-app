import React from "react";

export default function TicMessage(){
    return(
        <div className="tic-message">
            <div className="message-h-section">
                <h1 className="message-h">Message From TIC</h1>
                <div className="message-h-underline"></div>
            </div>
            <div className="inner-tic-message">
                <div className="inner-tic-message-img-section">
                    <img src="/img/logo1.png" className="inner-tic-message-img-section-img"/>
                </div>
                <div className="inner-tic-message-quote-section">
                    <i class="fa-solid fa-quote-left"></i>
                    <p className="inner-tic-message-img-section-quote">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}