import { Link } from "react-router-dom"
import axios from 'axios'
import { useState } from "react";
import { v4 } from 'uuid'


const AddSong = () => {
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const postData = () => {
    axios.post('http://localhost:3000/songs', {
      id: `${v4()}`,
      title,
      lyrics
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
    
  return (
    <div>
      <form>
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label htmlFor="lyrics">Lyrics:</label>
        <textarea id="lyrics" value={lyrics} onChange={(e) => setLyrics(e.target.value)} rows={10} cols={50}></textarea>
        <button onClick={postData}>Add</button>
        <Link to={'/'}><button>Cancel</button></Link>
      </form>
    </div>
)}

export default AddSong