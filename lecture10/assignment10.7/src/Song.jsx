import { useLoaderData } from "react-router-dom"
import { songs } from "./songs";
import axios from 'axios'

export function loader({params}) {
    return params
}

const Song = () => {
    const params = useLoaderData();

    const songToShow = songs.find(song => song.id.toString() === params.id);

    async function deleteSong(id) {
        await axios.delete(`http://localhost:3000/songs/${id}`)
        .then(() => console.log('DELETE DONE'))
        .catch((err) => console.log(`Delete was unsuccessfull: ${err}`));
    }
    
    return (
        <>
            <div className="song">
                <h2>{songToShow.title}</h2>
                <p>{songToShow.lyrics}</p>
                <button onClick={async() => await deleteSong(songToShow.id)}>Delete song</button>
            </div>
        </>
)}

export default Song