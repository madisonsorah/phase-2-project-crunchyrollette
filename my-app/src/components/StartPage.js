import React from "react";
import { Link } from "react-router-dom";
import CrunchyRollHime from "../images/CrunchyrollHime.png"
import NavBar from './NavBar'

function StartPage() {
    return (
    <div>
        <NavBar />
        <div className="startPageMainDiv">
            <div className="float-container">
                <div className="float-child1">
                    <div>
                        <h1 className="startPageHeader">Which Anime Series Should You Start Next?</h1>
                        <p className="startPageP">Take our crunchyrollette quiz! Can't decide on a new series to watch? Answer these six questions and we'll give you a personalized recommendation.</p>
                        <Link to="/crunchyrollette"><button className="startPageButton">LET'S GO!</button></Link>
                    </div>
                </div>
                <div>
                    <img className="Hime" alt="Crunchyroll-Hime" src={CrunchyRollHime}></img>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StartPage;