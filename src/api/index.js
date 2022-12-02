import axios from "axios";

const getPokemon = () => {
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=9")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}


export default getPokemon;