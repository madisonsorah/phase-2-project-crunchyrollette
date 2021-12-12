import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

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
    }, [])


    function handleAddAnime(newAnimeToWatch) {
        setWatchList([...watchList, newAnimeToWatch]);
      }

    function handleClick(anime) {
        const newAnimeToWatch = {
          title: anime.title,
          url: anime.url,
          episodes: anime.episodes,
        };
    
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
      }
    
    const showAnime = animeList.map((anime) => {
        if (animeResult === anime.genre) {
            return (
            <div className="animeResultMainDiv" key={anime.id}>
                <div className="animeResultContainer">
                    <h1 className="animeHeader">{anime.title}</h1>
                    <img className="animeImg" alt="Anime scene" src={anime.url}></img>
                    <p className="animeP">{anime.description}</p>
                    <li className="animeLi">
                        <button onClick={() => handleClick(anime)}>Add to your watch list</button> or <a href={anime.episodes} className="aAnime">click here to watch now!</a>
                    </li>
                    <li className="animeLi2">
                        <Link to="/startpage" className="aAnime">Retake crunchyrollette Quiz</Link>
                    </li>
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