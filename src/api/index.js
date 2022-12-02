import axios from "axios";

const getPokemon = () => {
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=9")
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
}


export default getPokemon;