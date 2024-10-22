import { useLoaderData } from "react-router-dom"
import { songs } from "./songs";

export function loader({params}) {
    return params
}

const Song = () => {
    const params = useLoaderData();

    const songToShow = songs.find(song => song.id.toString() === params.id);
    
    return (
        <>
            {params.id <= songs.length && 
            <div className="song">
                <h2>{songToShow.title}</h2>
                <p>{songToShow.lyrics}</p>
            </div>
            }
            {params.id > songs.length && 
            <div>
                <h2>Song not found</h2>
                <p>Choose a song from above</p>
            </div>
            }
        </>
)}

export default Song