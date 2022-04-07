import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Counter from "./Counter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function DisplayMovies({ getmovieinfo }) {
  const { id, moviename, img, rating, like, dislike, about } =
    getmovieinfo;
//trailer
  const [visible, setVisible] = useState(false);

  const ratingStyles = { color: rating < 8 ? "red" : "green" };
  const showSummaryStyle = { display: visible ? "block" : "none" };

  const history = useHistory();

  return (
    <div className="">
      {/* <h3>{id}</h3>
      <h3>{moviename}</h3>
      <h3>{img}</h3>
      <h3>{rating}</h3>
      <h3>{like}</h3>
      <h3>{dislike}</h3>
      <h3>{about}</h3>
      <h3>{trailer}</h3> */}

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
            <h3 className="movie-name">
              {moviename}
              <IconButton onClick={() => setVisible(!visible)}>
                {visible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
              <IconButton onClick={() => history.push("/movie/edit/" + id)}>
                Edit
              </IconButton>
            </h3>

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
