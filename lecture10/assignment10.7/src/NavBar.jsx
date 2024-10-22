import { Link } from "react-router-dom"
import { songs } from "./songs";
import { useState } from "react";

const NavBar = () => {
  const basicStyle = {
    color: "#F4F1DE",
  }
  
  const chosenStyle = {
    color: "#3D405B",
    fontWeight: "bold"
  }

  const [chosenSong, setChosenSong] = useState(null);
  
  const chooseSong = (id) => {
    setChosenSong(id);
  }

  const allSongs = songs.map(song => {
    if (chosenSong === song.id) {
      return (
        <Link className="navItem" to={`/song/${song.id}`} key={song.id} style={chosenStyle} onClick={() => chooseSong(song.id)}>{song.title}</Link>
      )
    } else {
      return (
        <Link className="navItem" to={`/song/${song.id}`} key={song.id} style={basicStyle} onClick={() => chooseSong(song.id)}>{song.title}</Link>
      )
    }
  })
    
    return (
    <>
      <nav className="navBar">
        {allSongs}
      <Link to={'/add'}><button onClick={() => chooseSong(null)}>Add song</button></Link>
      </nav> 
    </>
)}

export default NavBar
