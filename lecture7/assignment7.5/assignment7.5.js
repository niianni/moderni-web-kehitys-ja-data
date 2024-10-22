import axios from "axios";

const movieSearch = function(title) {
    return new Promise((res, rej) => {
        let data = axios.get(`https://www.omdbapi.com/?apikey=c3a0092f&s=${title}`);
        res(data);
    });
};

movieSearch("uusi")
.then((val) => console.log(val.data))
.catch((err) => console.log(err));
