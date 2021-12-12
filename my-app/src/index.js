import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import StartPage from './components/StartPage'
import QuizContainer from './components/QuizContainer'
import AnimeResult from './components/AnimeResult'
import WatchList from './components/WatchList'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="startpage" element={<StartPage />} />
        <Route path="watchlist" element={<WatchList />} />
        <Route path="crunchyrollette" element={<QuizContainer />} />
        <Route path="animeresult" element={<AnimeResult />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
