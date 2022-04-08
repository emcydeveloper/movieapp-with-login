// import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import DisplayMovies from "./DisplayMovies";
import Header from "./Header";

// import movie_API from "./Global_API"

export default function Home() {
  // const movies = [
  //   {
  //     id: 1,
  //     moviename: "Doctor",
  //     img: "https://live.staticflickr.com/65535/50070056113_ce887c2a4c_b.jpg",
  //     rating: "5",
  //     like: 1,
  //     dislike: 1,
  //     about: "This is about Movie1",
  //     trailer: "",
  //   },
  //   {
  //     id: 2,
  //     moviename: "Alaipayuthey",
  //     img: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Alaipayuthey.jpg?itok=uOqVorj4",
  //     rating: "4",
  //     like: 1,
  //     dislike: 1,
  //     about: "This is about Movie2",
  //     trailer: "",
  //   },
  // ];
  

  const [movies,setMovies] = useState([]);

  let movieFetch = ()=>{fetch("https://movieapp-with-login.herokuapp.com/getmovies",{method:"get",}).then((movieData)=>movieData.json()).then((moviesList)=>setMovies(moviesList)).then(()=>console.log("Home page loaded with movielist"))}

  useEffect(movieFetch,[]);
// console.log(movies)

  let getMovies = movies.map((movie, i) => {
    return <DisplayMovies key={i} getmovieinfo={movie} />;
  });

  return (
    <div className="home">
      <Header />
      <h3><b><u>Edit movie on-progress, Login validation pending, Search On-Progress, Complete Validation - Yet to start</u></b></h3>
      <h1>Homepage</h1>
      {/* <h1>Displaying Movies</h1> */}
      <div className="home-displaymovies">{getMovies}</div>      
    </div>
  );
}
