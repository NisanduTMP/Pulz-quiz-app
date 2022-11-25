import React from "react";
import AcivementsData from "./data/Acivements.data";

export default function Achivements(){
    const sortedList = [...AcivementsData].sort((a,b)=>b.year-a.year)

    return(
        <div className="achivements">
            <div className="h-section">
                <h1 className="h">Achievements</h1>
                <div className="h-underline"></div>
            </div>
            <div className="inner-achivement-section">
                {sortedList.map((achivement)=>(
                    <div className="single-achivement-section">
                        <div className="single-achivement-section-image">
                            <img src={achivement.image} className="single-achivement-section-image-img"/>
                        </div>
                        <div className="single-achivement-section-texts">
                            <h1 className="single-achivement-section-texts-h">{achivement.compName}</h1>
                            <p className="single-achivement-section-texts-p">{achivement.description}</p>
                            <h3 className="single-achivement-section-texts-h3">{achivement.year}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}