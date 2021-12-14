import React from "react";
import { Link } from "react-router-dom";
import CrunchyRollHime from "../images/CrunchyrollHime.png"
import CrunchyrollLogo from "../images/CrunchyrollLogo.png"
import NavBar from './NavBar'

function StartPage() {
    return (
    <div>
        <NavBar />
        <div className="startPageMainDiv">
            <div className="float-container">
                <div className="float-child1">
                    <div>
                        <h1 className="startPageHeader" style={{ marginBottom:20, marginTop: 20 }}>Which Anime Series Should You Start Next?</h1>
                        <p className="startPageP">Take our crunchyrollette quiz! Can't decide on a new series to watch? Answer these six questions and we'll give you a personalized recommendation.</p>
                        <Link to="/crunchyrollette"><button className="startPageButton">LET'S GO</button></Link>
                    </div>
                </div>
                <div>
                    <img className="Hime" alt="Crunchyroll-Hime" src={CrunchyRollHime}></img>
                </div>
                <div className="popularNowDiv">
                    <ul className="popularNowUl">
                        <h2 className="popularNowText">Popular Now</h2>
                        <li className="popularNowLi">
                            <a href="https://beta.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba">
                                <img className= "popularNowImg" src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3346f57e7a997f7bd6596f79f0507365.jpeg" alt="Demon Slayer"></img>
                            </a>
                            <p className="popularNowAnime">Demon Slayer: Kimetsu no Yaiba</p>
                        </li>
                        <li className="popularNowLi">
                            <a href="https://beta.crunchyroll.com/series/GR751KNZY/attack-on-titan">
                                <img className= "popularNowImg" src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b8f7c9c99134b4f98b8290ae11f7d396.jpeg" alt="Attack on Titan"></img>
                            </a>
                            <p className="popularNowAnime">Attack on Titan</p>
                        </li>
                        <li className="popularNowLi">
                            <a href="https://beta.crunchyroll.com/series/G63W41KD6/yashahime-princess-half-demon">
                                <img className= "popularNowImg" src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/21389065a7d188b5caeffb9b18826ed3.jpeg" alt="YashaHime"></img>
                            </a>
                            <p className="popularNowAnime">Yashahime: Princess Half-Demon</p>
                        </li>
                        <li className="popularNowLi">
                            <a href="https://beta.crunchyroll.com/series/GYP8DP1MY/jojos-bizarre-adventure">
                                <img className= "popularNowImg" src="https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/aaeca3e651bebe79fe808085d079feea.jpeg" alt="JoJo"></img>
                            </a>
                            <p className="popularNowAnime">JoJo's Bizarre Adventure</p>
                        </li>
                        <li className="popularNowMore">
                            <a href="https://beta.crunchyroll.com/videos/popular">
                                <img className= "logoImg" src={CrunchyrollLogo} alt="logo"></img>
                            </a>
                            <a className="viewAll" href="https://beta.crunchyroll.com/videos/popular"><p className="popularNowAnime">View All</p></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StartPage;