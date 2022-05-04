import React from "react";
import "./Region.css";

function Region() {
    const seeMore = () => {
        document.querySelector(".content__region__block__list").classList.toggle("showRegionMenu");
    }

    return (
        <div className="content__region">
                <div className="content__region__op-cl" onClick={seeMore}>
                    <h3>Filter by Region</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon"  width="16px" height="16px" viewBox="0 0 512 512">
                        <title>Chevron Down</title>
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/>
                    </svg>
                </div>
                <div className="content__region__block">
                    <ul className="content__region__block__list">
                        <li className="region-list" id="africa">Africa</li>
                        <li className="region-list" id="america">America</li>
                        <li className="region-list" id="asia">Asia</li>
                        <li className="region-list" id="europe">Europe</li>
                        <li className="region-list" id="oceania">Oceania</li>
                    </ul>
            </div>
        </div>
        
    )
}

export default Region;