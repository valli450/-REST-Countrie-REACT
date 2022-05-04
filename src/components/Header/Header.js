import React from 'react';
import "./Header.css";

function Header(){
    const darkMode = () =>{
        document.body.classList.toggle('darkMode');
    }

    return (
        <div className="header">
            <div className="header__text">
                <a href="../App.js">Where in the world?</a>
            </div>
            <div className="header__dark-mode-text" onClick={darkMode}>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon moon" width="16px" height="16px" viewBox="0 0 512 512">
                    <title>Moon</title>
                    <path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                </svg> 
                <p>Dark Mode</p>             
            </div>
        </div>
    )
};

export default Header;