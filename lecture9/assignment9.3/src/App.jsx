import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const config = {
  headers: {
    'X-Api-Key': 'qFRwfcoEjiLRvRYhJirWtQ==1JTjQy3ah2MoAPgM'
  }
}

const App = () => {
  const [joke, setJoke] = useState('');
   
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(apiUrl, config)
        .then((response) => {
          setJoke(response.data[0].joke);
        });
    };

    fetchData();

  }, []);


  return (
    <>
      <h1>Get new joke by refreshing the page</h1>
      <p>{joke}</p>
    </>
  )

}

export default App
