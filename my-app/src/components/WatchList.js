import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"

function WatchList() {
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/savedAnime')
        .then((response) => response.json())
        .then((savedAnimeData) => setWatchList(savedAnimeData))
    }, [])

    const renderedWatchList = watchList.map((series) => {
        return(
        <div className="watchListAnimeDiv" key={series.id}>
            <a href={series.episodes}><img className="watchListImg" alt="anime scene" src={series.url}></img></a>
            <h3 className="watchListAnime">{series.title}</h3>
            <button className="watchListButton">Remove from Watch List</button>
        </div>
        )
    })    
    
    return (
        <div>
            <NavBar />
            <div className="watchListContainer">
                <h1 className="watchListHeader">My Watch List</h1>
                <p className="watchListP">The series below have been saved to your queue.</p>
                {renderedWatchList}
            </div>
        </div>
    )
}

export default WatchList;
