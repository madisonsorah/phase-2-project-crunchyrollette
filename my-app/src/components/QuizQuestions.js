import React from "react";

function QuizQuestions({quiz}) {
    return (
        <div>
            <div>
                <h2>{quiz.question}</h2>
                    <input type="checkbox">{quiz.answera}</input>
                    <input type="checkbox">{quiz.answerb}</input>
                    <input type="checkbox">{quiz.answerc}</input>
                    <input type="checkbox">{quiz.answerd}</input>
            </div>
        </div>
    )
}

export default QuizQuestions;