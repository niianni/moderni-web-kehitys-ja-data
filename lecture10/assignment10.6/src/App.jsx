import './App.css'
import { Link, Outlet } from "react-router-dom"
import { songs } from './songs'
import { useState } from 'react'

const basicStyle = {
  color: "#F4F1DE"
}

const chosenStyle = {
  color: "#3D405B",
  fontWeight: "bold"
}

const App = () => {
  const [chosenSong, setChosenSong] = useState(null);

  const chooseSong = (id) => {
    setChosenSong(id);
  }

  const allSongs = songs.map(song => {
    if (chosenSong === song.id) {
      return (
        <Link to={`/song/${song.id}`} key={song.id} style={chosenStyle} onClick={() => chooseSong(song.id)}>{song.title}</Link>
      )
    } else {
      return (
        <Link to={`/song/${song.id}`} key={song.id} style={basicStyle} onClick={() => chooseSong(song.id)}>{song.title}</Link>
      )
    }
  })

  return (
    <>
    <div>
      <h1>Song book</h1>
      <nav className="navBar">
        {allSongs}
      </nav>
      <Outlet />
    </div>
    </>
  )
}

export default App