import React from "react";

function QuizQuestions({question, trackedAnswers, setTrackedAnswers}) {
    function handleSelection(cat) {
        setTrackedAnswers((trackedAnswers) => {
            const newTrackedAnswers = {...trackedAnswers};
            newTrackedAnswers[question.id] = cat;
            return newTrackedAnswers;
        });
    };

    const cats = ["sliceOfLife", "action", "thriller", "fantasy", "romance", "comedy"];

    const renderedAnswers = cats.map((cat) => (
        <li className="answerLi" key={question[cat]}>
            <input 
                className="answerCheck" 
                type="checkbox" 
                value={question[cat]}
                checked={trackedAnswers[question.id] === cat ? true : false}
                onChange={() => handleSelection(cat)}>
            </input>
            <label htmlFor={cat} className="quizAnswer">{question[cat]}</label>
        </li> 
    ));

    return (
        <div className="quizMainDiv">
            <div className="questionContainer">
                <h3 className="quizQuestion">{question.question}</h3>
                {renderedAnswers}
            </div>
        </div>
    )
}

export default QuizQuestions;