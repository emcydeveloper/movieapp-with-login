// import { Switch, Route } from "react-router-dom";
import AddMovie from "./AddMovie";
import DisplayMovies from "./DisplayMovies";
// import EditMovie from "./EditMovie";
import Header from "./Header";
// import Search from "./Search";

export default function Home() {
  const movies = [
    {
      id: 1,
      moviename: "Doctor",
      img: "https://live.staticflickr.com/65535/50070056113_ce887c2a4c_b.jpg",
      rating: "5",
      like: 1,
      dislike: 1,
      about: "This is about Movie1",
      trailer: "",
    },
    {
      id: 2,
      moviename: "Alaipayuthey",
      img: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Alaipayuthey.jpg?itok=uOqVorj4",
      rating: "4",
      like: 1,
      dislike: 1,
      about: "This is about Movie2",
      trailer: "",
    },
  ];

  const getMovie = movies.map((movie, i) => {
    return <DisplayMovies key={i} getmovieinfo={movie} />;
  });

  return (
    <div className="home">
      <Header />
      <h1>homepage</h1>
      <h1>Displaying Movies</h1>
      <div className="home-displaymovies">{getMovie}</div>      
    </div>
  );
}
