import React, {useState, useEffect} from "react";
import OrangeGradiant from "../images/OrangeGradiant.jpg";
import NavBar from './NavBar'
import AnimeResult from './AnimeResult'
import QuizQuestions from "./QuizQuestions";

function QuizContainer() {
    const [quiz, setQuiz] = useState([])
    const [trackedAnswers, setTrackedAnswers] = useState({});
    const [animeResult, setAnimeResult] = useState("")
    const [isSubmitted, setSubmitted] = useState(false)

    useEffect(() => {
    fetch('http://localhost:8000/quiz')
        .then((response) => response.json())
        .then((quizData) => setQuiz(quizData))
    }, []);

    const renderedQuestions = quiz.map((question) => (
        <QuizQuestions 
        question={question} 
        key={question.id} 
        trackedAnswers={trackedAnswers}
        setTrackedAnswers={setTrackedAnswers}
        />
    ));

    const categoryCount = {
        action: 0,
        comedy: 0,
        fantasy: 0,
        romance: 0,
        sliceOfLife: 0,
        thriller: 0
    }

   function handleCategories(e) {
       e.preventDefault();
       for (let id in trackedAnswers) {
           if (trackedAnswers[id] === "action") {
               categoryCount.action = categoryCount.action + 1;
           } else if (trackedAnswers[id] === "comedy") {
                categoryCount.comedy = categoryCount.comedy + 1;
           } else if (trackedAnswers[id] === "fantasy") {
                categoryCount.fantasy = categoryCount.fantasy + 1;
           } else if (trackedAnswers[id] === "romance") {
                categoryCount.romance = categoryCount.romance + 1;
           } else if (trackedAnswers[id] === "sliceOfLife") {
                categoryCount.sliceOfLife = categoryCount.sliceOfLife + 1;
           } else if (trackedAnswers[id] === "thriller") {
                categoryCount.thriller = categoryCount.thriller + 1;
           } 
       };
       
       let count = 0; 
       let winningCategory;

       for (let category in categoryCount) {
           if (categoryCount[category] > count) {
               count = categoryCount[category];
               winningCategory = category;
           } 
       };

       setAnimeResult(winningCategory);
       setSubmitted((isSubmitted) => !isSubmitted);
   }

   if (isSubmitted) {
        return (
            <div>
                <NavBar />
                <AnimeResult animeResult={animeResult} />
            </div>
        )
   } else {
    return (
        <div>
            <NavBar />
            <div className="quizMainDiv" style={{ backgroundImage: `url(${OrangeGradiant})` }}>
                <form onSubmit={handleCategories}>
                    <div>
                        {renderedQuestions}
                    </div>
                    <div className="submitButtonDiv">
                        <button className="submitQuizButton">GET MY ANIME RECOMMENDATION!</button>
                    </div>
                </form>
            </div>
        </div>
       )
   }
}

export default QuizContainer;