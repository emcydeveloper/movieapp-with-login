import { useEffect, useState } from "react";
import DisplayMovies from "./DisplayMovies";
import Header from "./Header";

export default function Search() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

  let movieFetch = () => {
    fetch("https://movieapp-with-login.herokuapp.com/getmovies", {
      method: "get",
    })
      .then((movieData) => movieData.json())
      .then((moviesList) => setMovies(moviesList))
      .then(console.log("Search page loaded with movie list"));
  };

  useEffect(movieFetch, []);

  function handleChange(event) {
    setInput(event.target.value);
    setMovie([]);

    if (input.length > 2) {
      movies.filter(function (mv) {
        mv.moviename = mv.moviename.toLowerCase();
        return (
          mv.moviename.indexOf(input.toLowerCase()) > -1 &&
          setMovie((previousState) => [...previousState, mv])
        );
      });
    } else {
      setMovie([]);
    }
  }

  function handleSearch() {
    setMovie([]);
    movies.filter((mv) => {
      return (
        mv.moviename.toLowerCase() === input.toLowerCase() &&
        setMovie((previousState) => [...previousState, mv])
      );
    });
  }

  let getMovies = movie.map((movie, i) => {
    return <DisplayMovies key={i} getmovieinfo={movie} />;
  });

  return (
    <div className="search">
      <Header />
      <input
        type="text"
        placeholder="Enter the Movie Name"
        onChange={handleChange}
        name="moviename"
        value={input}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="home-displaymovies">{getMovies}</div>
    </div>
  );
}
