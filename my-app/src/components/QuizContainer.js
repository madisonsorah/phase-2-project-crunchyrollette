import React, {useState, useEffect} from "react";
import QuizQuestions from "./QuizQuestions"

function QuizContainer() {
    const [quiz, setQuiz] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/quiz')
        .then(response => response.json())
        .then((quizData) => setQuiz(quizData))
    }, [])



    const renderedQuestions = quiz.map((question) => (
        <QuizQuestions question={question} key={question.id}/>
    ))
    return (
        <div>
            {renderedQuestions}
        </div>
    )
}

export default QuizContainer;