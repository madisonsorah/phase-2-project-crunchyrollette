import React from "react";
import CrunchyrollLogo from '../images/CrunchyrollLogo.png';
import { Link } from "react-router-dom";

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
                    <a className="aNav" href="https://www.crunchyroll.com/videos/anime">Shows</a>
                </li>
                <li className="navLi">
                    <a className="aNav" href="https://www.crunchyroll.com/comics/manga">Manga</a>
                </li>
                <li className="navLi">
                    <a className="aNav" href="https://www.crunchyroll.com/news">News</a>
                </li>
                <li className="navLi">
                    <a className="aNav" href="https://www.crunchyroll.com/games/index.html">Games</a>
                </li>
                <li className="navLi">
                    <a className="aNav" href="https://store.crunchyroll.com/">Store</a>
                </li>
                <li className="navLi">
                    <Link className="aNav" to="/startpage">crunchyrollette Quiz *NEW*</Link>
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