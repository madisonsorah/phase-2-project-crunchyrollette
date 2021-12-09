import React from "react";

function QuizQuestions({question, setCheckedAnswer, checkedAnswer}) {
    function handleAnswerA() {
        setCheckedAnswer("answera")
    }

    function handleAnswerB() {
        setCheckedAnswer("answerb")
    }

    function handleAnswerC() {
        setCheckedAnswer("answerc")
    }

    function handleAnswerD() {
        setCheckedAnswer("answerd")
    }
    
    
    return (
        <div className="quizMainDiv">
            <div className="questionContainer">
                <h3 className="quizQuestion">{question.question}</h3>
                    <li className="answerLi">
                        <input 
                        className="answerCheck" 
                        type="checkbox" 
                        id="answera" 
                        value={question.answera}
                        checked={checkedAnswer === "answera" ? true : false}
                        onChange={handleAnswerA}
                        ></input>
                        <label htmlFor="answera" className="quizAnswer">{question.answera}</label>
                    </li>
                    <li className="answerLi">
                        <input 
                        className="answerCheck" 
                        type="checkbox" 
                        id="answerb" 
                        value={question.answerb}
                        checked={checkedAnswer === "answerb" ? true : false}
                        onChange={handleAnswerB}
                        ></input>
                        <label htmlFor="answerb" className="quizAnswer">{question.answerb}</label>
                    </li>
                    <li className="answerLi">
                        <input 
                        className="answerCheck" 
                        type="checkbox" 
                        id="answerc" 
                        value={question.answerc}
                        checked={checkedAnswer === "answerc" ? true : false}
                        onChange={handleAnswerC}
                        ></input>
                        <label htmlFor="answerc" className="quizAnswer">{question.answerc}</label>
                    </li>
                    <li className="answerLi">
                        <input 
                        className="answerCheck" 
                        type="checkbox" 
                        id="answerd" 
                        value={question.answerd}
                        checked={checkedAnswer === "answerd" ? true : false}
                        onChange={handleAnswerD}
                        ></input>
                        <label htmlFor="answerd" className="quizAnswer">{question.answerd}</label>
                    </li>
            </div>
        </div>
    )
}

export default QuizQuestions;