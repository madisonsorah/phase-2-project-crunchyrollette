import React, {useState, useEffect} from "react";
import QuizQuestions from "./QuizQuestions"
// import AnimeResult from './components/AnimeResult'

function QuizContainer() {
    const [quiz, setQuiz] = useState([])
    // const [anime, setAnime] = useState([])

    useEffect(() => {
    fetch('http://localhost:8000/quiz')
        .then((response) => response.json())
        .then((quizData) => setQuiz(quizData))
    }, [])

    const renderedQuestions = quiz.map((question) => (
        <QuizQuestions question={question} key={question.id}/>
    ))

    // const renderedAnimeResult = 

    return (
        <div className="quizMainDiv">
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