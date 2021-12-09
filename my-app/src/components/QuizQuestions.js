import React from "react";

function QuizQuestions({question}) {
    return (
        <div className="quizMainDiv">
            <div className="questionContainer">
                <h3 className="quizQuestion">{question.question}</h3>
                    <li className="answerLi">
                        <input className="answerCheck" type="checkbox" id="answera" value={question.answera}></input>
                        <label htmlFor="answera" className="quizAnswer">{question.answera}</label>
                    </li>
                    <li className="answerLi">
                        <input className="answerCheck" type="checkbox" id="answerb" value={question.answerb}></input>
                        <label htmlFor="answerb" className="quizAnswer">{question.answerb}</label>
                    </li>
                    <li className="answerLi">
                        <input className="answerCheck" type="checkbox" id="answerc" value={question.answerc}></input>
                        <label htmlFor="answerc" className="quizAnswer">{question.answerc}</label>
                    </li>
                    <li className="answerLi">
                        <input className="answerCheck" type="checkbox" id="answerd" value={question.answerd}></input>
                        <label htmlFor="answerd" className="quizAnswer">{question.answerd}</label>
                    </li>
            </div>
        </div>
    )
}

export default QuizQuestions;