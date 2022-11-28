import React from "react";

export default function Logo(){
    const details = [
        {
            id:1,
            item:'Centered logo in maroon partition',
            meaning:'Symbolizes the respect towards the school and the centered decisions taken without any favouration to any unauthorized party'
        },
        {
            id:2,
            item:'Logo format from piet mondrian\'s artwork',
            meaning:'Modernization of visual art'
        },
        {
            id:3,
            item:'Centering waka deka',
            meaning:'Traditional sinhala art'
        },
        {
            id:4,
            item:'Small squares and rectangles creating a major square',
            meaning:'Power and wonder of the Unity'
        },
        {
            id:5,
            item:'Partition of colours',
            meaning:'Varieties of visual art'
        },
        {
            id:6,
            item:'Transparent border',
            meaning:'Transparency and Purity'
        }
    ]
    return(
        <div className="logo-section">
            <div className="inner-logo-section">
                <div className="h-section">
                    <h1 className="h">Logo And It's Meanings</h1>
                    <div className="h-underline"></div>
                </div>
                <img src="/img/logo2.png" className="inner-logo-section-logo"/>
                <div className="inner-logo-section-details">
                    {details.map((detail)=>{
                        return(
                            <div className="inner-logo-detial-section-card">
                                <i class="fa-solid fa-circle"></i>
                                <p className="inner-logo-detial-section-card-item">{detail.item}</p>
                                <p className="inner-logo-detial-section-card-hypen">-</p>
                                <p className="inner-logo-detial-section-card-meaning">{detail.meaning}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}