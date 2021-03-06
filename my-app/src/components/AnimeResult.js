import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import HimeBanner from "../images/HimeBanner.png"

function AnimeResult({animeResult}) {
    const [animeList, setAnimeList] = useState([]);
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/animeList')
        .then((response) => response.json())
        .then((animeData) => setAnimeList(animeData))
    }, []);

    useEffect(() => {
        fetch('http://localhost:8000/savedAnime')
        .then((response) => response.json())
        .then((savedAnimeData) => setWatchList(savedAnimeData))
    }, []);

    function handleAddAnime(newAnimeToWatch) {
        setWatchList([...watchList, newAnimeToWatch]);
      };

    function handleClick(anime) {
        const newAnimeToWatch = {
          title: anime.title,
          url: anime.url,
          episodes: anime.episodes,
        }
    
        fetch("http://localhost:8000/savedAnime", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAnimeToWatch),
        })
          .then((r) => r.json())
          .then(handleAddAnime)
          .then(() => window.location = "/watchlist")
      };
    
    const showAnime = animeList.map((anime) => {
        if (animeResult === anime.genre) {
            return (
                <div className="animeResultMainDiv" key={anime.id}>
                    <div className="animeResultContainer">
                        <h1 className="animeHeader">{anime.title}</h1>
                        <img className="animeImg" alt="Anime scene" src={anime.url}></img>
                        <p className="animeP">{anime.description}</p>
                        <li className="animeLi">
                            <button className="addWatchListButton" onClick={() => handleClick(anime)}>ADD TO WATCHLIST</button>
                            <a href={anime.episodes} className="aAnime"><button className="startWatchingButton">START WATCHING S1 E1</button></a>
                        </li>
                    </div>
                    <div className="himeBanner">
                        <Link to="/startpage" className="himeA"><img className="himeImg" src={HimeBanner}></img></Link>
                        <Link to="/startpage" className="himeText">RETAKE QUIZ</Link>
                    </div>
                </div>
            );
        };
    });
    
return (
    <div>
        {showAnime}
    </div>
    )
}

export default AnimeResult;