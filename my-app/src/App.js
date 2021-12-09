import React from "react";
import NavBar from './components/NavBar'
import Header from './components/Header'
import StartPage from './components/StartPage'
import AnimeResult from './components/AnimeResult'


function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <StartPage />
      <AnimeResult />
    </div>
  );
}

export default App;
