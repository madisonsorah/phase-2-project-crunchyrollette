import React, {useState, useEffect} from "react";
import OrangeGradiant from "../images/OrangeGradiant.jpg"
import QuizQuestions from "./QuizQuestions"
// import AnimeResult from './components/AnimeResult'

function QuizContainer() {
    const [quiz, setQuiz] = useState([])
    const [checkedAnswer, setCheckedAnswer] = useState("");
    // const [anime, setAnime] = useState([])

    useEffect(() => {
    fetch('http://localhost:8000/quiz')
        .then((response) => response.json())
        .then((quizData) => setQuiz(quizData))
    }, [])

    const renderedQuestions = quiz.map((question) => (
        <QuizQuestions 
        question={question} 
        key={question.id} 
        checkedAnswer={checkedAnswer} 
        setCheckedAnswer={setCheckedAnswer}
        />
    ))

    // const renderedAnimeResult = 

    return (
        <div className="quizMainDiv" style={{ backgroundImage: `url(${OrangeGradiant})`}}>
            <div>
            {renderedQuestions}
            </div>
            <div className="submitButtonDiv">
            <button className="submitQuizButton">GET MY ANIME RECOMMENDATION!</button>
            </div>
        </div>
    )
}

export default QuizContainer;