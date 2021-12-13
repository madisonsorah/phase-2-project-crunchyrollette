import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"

function WatchList() {
    const [watchList, setWatchList] = useState([]);
    const [search, setSearch] = useState("")

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

    const filteredList = watchList.filter((series) => series.title.toLowerCase().includes(search.toLowerCase()))

      const renderedWatchList = filteredList.map((series) => {
        return(
        <div className="watchListAnimeDiv" key={series.id}>
            <div>
                <a href={series.episodes}>
                    <img className="watchListImg" alt="anime scene" src={series.url}></img>
                </a>
            </div>
            <h3 className="watchListAnime">{series.title}</h3>
            <a href={series.episodes} className="aAnime"><button className="startWatchingButton">WATCH S1 E1</button></a> 
            <button className="watchListButton" onClick={() => handleDelete(series.id)}>Remove from Watch List</button>
        </div>
        )
        })
    
    function handleSubmit(e) {
        e.preventDefault();
        setSearch(e.target.value);
      }
    
    return (
        <div>
            <NavBar />
            <div className="watchListContainer">
                <h1 className="watchListHeader">My Watch List</h1>
                <p className="watchListP">The series below have been saved to your queue.</p>
                <form className="watchListSearch" onSubmit={handleSubmit} className="watchListForm">
                    <input 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search} 
                    type="text" 
                    className="watchListInput" 
                    placeholder="Anime Title.."></input>
                </form>
                {renderedWatchList}
            </div>
        </div>
    )
}

export default WatchList;
