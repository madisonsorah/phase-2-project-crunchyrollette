import React from "react";
import CrunchyrollLogo from '../images/CrunchyrollLogo.png'
import StartPage from './StartPage'

function NavBar() {
    return (
        <div className="mainNavDiv">
            <div className="navImgDiv">
                <a href="https://www.crunchyroll.com/">
                    <img alt="Crunchyroll Logo" className="navLogo" src={CrunchyrollLogo}></img>
                </a>
            </div>
            <ul className="navUl">
                <li className="navLi">
                    <a href="https://www.crunchyroll.com/videos/anime">Shows</a>
                </li>
                <li className="navLi">
                    <a href="https://www.crunchyroll.com/comics/manga">Manga</a>
                </li>
                <li className="navLi">
                    <a href="https://www.crunchyroll.com/news">News</a>
                </li>
                <li className="navLi">
                    <a href="https://www.crunchyroll.com/games/index.html">Games</a>
                </li>
                <li className="navLi">
                    <a href="https://store.crunchyroll.com/">Store</a>
                </li>
                <li className="navLi">
                    <a href={<StartPage />}>CrunchyRollette *NEW*</a>
                </li>
            </ul>
            <div className="navFormDiv">
                <form className="navForm">
                    <input type="text" className="navInput" placeholder="Anime, Drama, etc."></input>
                </form>
            </div>
        </div>
    )
}

export default NavBar;