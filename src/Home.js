// import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import DisplayMovies from "./DisplayMovies";
import Header from "./Header";

// import movie_API from "./Global_API"

export default function Home() {
  const [movies, setMovies] = useState([]);

  let movieFetch = () => {
    fetch("https://movieapp-with-login.herokuapp.com/getmovies", {
      method: "get",
    })
      .then((movieData) => movieData.json())
      .then((moviesList) => setMovies(moviesList))
      .then(() => console.log("Home page loaded with movielist"));
  };

  useEffect(movieFetch, []);

  let getMovies = movies.map((movie, i) => {
    return <DisplayMovies key={i} getmovieinfo={movie} />;
  });

  return (
    <div className="home">
      <Header />
      <div className="home-displaymovies">{getMovies}</div>
    </div>
  );
}
