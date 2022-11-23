import React from "react";

export default function PrincipalMessage(){
    return(
        <div className="principal-message">
            <div className="message-h-section">
                <h1 className="message-h">Message From Principal</h1>
                <div className="message-h-underline"></div>
            </div>
            <div className="inner-principal-message">
                <div className="inner-principal-message-quote-section">
                    <i class="fa-solid fa-quote-left"></i>
                    <p className="inner-principal-message-img-section-quote">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="inner-principal-message-img-section">
                    <img src="/img/logo1.png" className="inner-principal-message-img-section-img"/>
                </div>
            </div>
        </div>
    )
}