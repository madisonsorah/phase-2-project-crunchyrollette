import React, {useState, useEffect} from "react";
import OrangeGradiant from "../images/OrangeGradiant.jpg";

function AnimeResult({animeResult}) {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/animeList')
        .then((response) => response.json())
        .then((animeData) => setAnimeList(animeData))
    }, []);
    
    const showAnime = animeList.map((anime) => {
        if (animeResult === anime.genre) {
            return (
            <div className="animeResultMainDiv" key={anime.id} style={{ backgroundImage: `url(${OrangeGradiant})` }}>
                <div className="animeResultContainer">
                    <h1 className="animeHeader">{anime.title}</h1>
                    <img className="animeImg" alt="Anime scene" src={anime.url}></img>
                    <p className="animeP">{anime.description}</p>
                    <a href={anime.episodes} className="aAnime">Click here to watch!</a>
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