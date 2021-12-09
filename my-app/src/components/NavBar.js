import React from "react";
import CrunchyrollLogo from '../images/CrunchyrollLogo.png'

function NavBar() {
    return (
        <div className="mainNavDiv">
            <div className="navImgDiv">
            <img alt="Crunchyroll Logo" className="navLogo" src={CrunchyrollLogo}></img>
            </div>
            <ul className="navUl">
                <li className="navLi">Shows</li>
                <li className="navLi">Manga</li>
                <li className="navLi">News</li>
                <li className="navLi">Games</li>
            </ul>
            <div className="navFormDiv">
                <form className="navForm">
                    <input className="navInput" placeholder="Anime, Drama, etc."></input>
                </form>
            </div>
        </div>
    )
}

export default NavBar;