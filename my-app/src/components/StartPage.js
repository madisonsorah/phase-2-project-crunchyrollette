import React, {useState} from "react";
import QuizContainer from "./QuizContainer"
import CrunchyRollHime from "../images/CrunchyrollHime.png"

function StartPage() {
    const [isStarted, setStart] = useState(false);
    function handleClick() {
        setStart((isStarted) => !isStarted)
    }
    
    if (isStarted) {
        return <QuizContainer />
    } else {
        return (
        <div className="startPageMainDiv">
                <div>
                    <h2 className="startPageHeader">Which Anime Series Should I Start Next?</h2>
                    <p className="startPageP">Can't decide on a series to start? Answer these six questions and we'll give you a personalized recommendation!</p>
                    <button onClick={handleClick} className="startPageButton">LET'S GO!</button>
                </div>
                <div>
                    <img className="startPageImg" alt="Crunchyroll-Hime" src={CrunchyRollHime}></img>
                </div>
            </div>
        )
}
}

export default StartPage;