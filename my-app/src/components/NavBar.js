import React, {useState} from "react";
import CrunchyrollNav from '../images/CrunchyrollNav.png';
import ProfileImage from '../images/ProfileImage.png'
import { Link } from "react-router-dom";

function NavBar() {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked((clicked) => !clicked)
    };

    return (
        <div className="mainNavDiv">
            <div className="navImgDiv">
                <a href="https://www.crunchyroll.com/">
                    <img alt="Crunchyroll Logo" className="navLogo" src={CrunchyrollNav}></img>
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
                <p className="loginGreeting">Hello, Madison!</p>
            </ul>
            <img className="profileImage" onClick={handleClick} src={ProfileImage}></img>
            <div>{clicked ? 
                <div className="dropDown">
                    <li className="dropdownLi">Profile</li>
                    <li className="dropdownLi">Settings</li>
                    <Link to="/watchlist"><li className="dropdownLi">Watch List</li></Link>
                    <li className="dropdownLi" onClick={handleClick}>Close Menu</li>
                </div> 
                : ""}
            </div>
        </div>
    )
}

export default NavBar;