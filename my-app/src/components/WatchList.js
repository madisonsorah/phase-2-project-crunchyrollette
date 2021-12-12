import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"

function WatchList() {
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/savedAnime')
        .then((response) => response.json())
        .then((savedAnimeData) => setWatchList(savedAnimeData))
    }, [])

    const handleDelete = (id) => {
        let updatedWatchList = watchList.filter((series) => series.id !== id)
        console.log(id)
        setWatchList(updatedWatchList);
        const config = {
          method: "DELETE",
        }
        fetch(`http://localhost:8000/savedAnime/${id}`, config)
      }

    const renderedWatchList = watchList.map((series) => {
        return(
        <div className="watchListAnimeDiv" key={series.id}>
            <div>
                <a className="container" href={series.episodes}>
                    <img className="watchListImg" alt="anime scene" src={series.url}></img>
                    <div className="middle">
                        <div>Watch Episode 1</div>
                    </div>
                </a>
            </div>
            <h3 className="watchListAnime">{series.title}</h3>
            <button className="watchListButton" onClick={() => handleDelete(series.id)}>Remove from Watch List</button>
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
