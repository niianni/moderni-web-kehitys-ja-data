import axios from 'axios';

const getData = async function() {
    let allData = await axios.get('http://localhost:3000/songs');
    return allData.data;
}

export let songs = await getData();
