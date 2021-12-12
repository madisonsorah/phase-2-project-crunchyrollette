import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"

function ProfilePage() {
    return (
        <div>
            <NavBar />
            <ul>
                <li><Link to="/watchlist">Watch Later List</Link></li>
            </ul>
        </div>
    )
}

export default ProfilePage;