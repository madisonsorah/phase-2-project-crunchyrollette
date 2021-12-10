import React, {useEffect} from "react";

function QuizQuestions({question, setCheckedAnswer, checkedAnswer, answerTracker, setTrackedAnswers}) {
    function handleSelection(cat) {
        setCheckedAnswer(cat)
    }

    // if (cat === "sliceOfLife") {
    //     setTrackedAnswers((answerTracker) => answerTracker + 1)
    // }

    const cats = ["sliceOfLife", "action", "thriller", "fantasy", "romance", "comedy"];

    // Found at https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    // function shuffleCats(cats) {
    //     let currentIndex = cats.length, randomIndex;
    //     // While there remain elements to shuffle...
    //     while (currentIndex !== 0) {
    //         // Pick a remaining element...
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex--;
    //         // And swap it with the current element.
    //         [cats[currentIndex], cats[randomIndex]] = [
    //         cats[randomIndex], cats[currentIndex]];
    //     }
    //     return cats;
    //     }

    const renderedAnswers = cats.map((cat) => (
        <li className="answerLi" key={question[cat]}>
            <input 
                className="answerCheck" 
                type="checkbox" 
                id={question.id}
                value={question[cat]}
                checked={checkedAnswer === cat ? true : false}
                onChange={() => handleSelection(cat)}
            ></input>
            <label htmlFor={cat} className="quizAnswer">{question[cat]}</label>
        </li> 
    ))

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