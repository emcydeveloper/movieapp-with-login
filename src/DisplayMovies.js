import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Counter from "./Counter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function DisplayMovies({ getmovieinfo }) {
  const history = useHistory();
  
  const { id, moviename, img, rating, like, dislike, about } =
    getmovieinfo;
//trailer
  const [visible, setVisible] = useState(false);

  const ratingStyles = { color: rating < 8 ? "red" : "green" };
  const showSummaryStyle = { display: visible ? "block" : "none" };

  

  return (
    <div className="">
      {/* <h2>{id}</h2>
      <h2>{moviename}</h2>
      <h2>{img}</h2>
      <h2>{rating}</h2>
      <h2>{like}</h2>
      <h2>{dislike}</h2>
      <h2>{about}</h2>
      <h2>{trailer}</h2> */}

      <Card className="displaymovies-card">
        <CardContent>
          <img className="movie-poster" src={img} alt={moviename}></img>
          <div className="like-edit">
            <div>
              <Counter sendLike={like} sendDislike={dislike}/>
            </div>
            {/* {deleteBtn} */}
          </div>
          {/* <hr></hr> */}
          <section className="movie-section">
            <h2 className="movie-name">
              {moviename}
              <IconButton onClick={() => setVisible(!visible)}>
                {visible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
              <IconButton onClick={() => history.push("/edit/" + id)}>
                Edit
              </IconButton>
            </h2>

            <p className="movie-rating" style={ratingStyles}>
              ⭐ {rating}
            </p>
          </section>
          {/* {<hr></hr>} */}
          <p style={showSummaryStyle} className="movie-summary">
            
            {about}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
