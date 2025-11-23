import axios from "axios";
import { useState } from "react";

function App() {
  
  const url_movie_db = "https://api.themoviedb.org/3/search/movie";
  const apiURL = import.meta.env.VITE_MOVIE_DB_KEY;
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  function handleChange(event){
    setSearch(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
  }

  function fetchMovies(){
    axios.get(`${url_movie_db}?api_key=${apiURL}&query=${search}`)
    .then((response) => setMovies(response.data.results))
  }

  return (
    <>
      <header>
        <h1>Boolflix</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Cerca..." value={search} onChange={handleChange}/>
          <button type="submit" onClick={fetchMovies}>Cerca</button>
        </form>
        <p>{search}</p>
        <ul>
          {
            movies.map((movie) => (
              <li>{movie.title}</li>
            ))
          }
        </ul>
      </header>
      
      <main></main>
    </>
  )
}

export default App
