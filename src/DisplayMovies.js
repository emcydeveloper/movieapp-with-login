import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Counter from "./Counter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function DisplayMovies({ getmovieinfo }) {
  const history = useHistory();

  const { id, moviename, img, rating, like, dislike, about } = getmovieinfo;

  const [visible, setVisible] = useState(false);

  const ratingStyles = { color: rating < 8 ? "red" : "green" };
  const showSummaryStyle = { display: visible ? "block" : "none" };

  return (
    <div className="">
      <Card className="displaymovies-card">
        <CardContent>
          <img className="movie-poster" src={img} alt={moviename}></img>
          <div className="like-edit">
            <div>
              <Counter sendLike={like} sendDislike={dislike} id={id} />
            </div>
            {/* {deleteBtn} */}
          </div>
          {/* <hr></hr> */}
          <section className="movie-section">
            <h2 className="movie-name">
              {moviename}
              <div>
                <IconButton onClick={() => setVisible(!visible)}>
                  {visible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
                <IconButton onClick={() => history.push("/edit/" + id)}>
                <EditIcon />
                </IconButton>
                <IconButton onClick={() => history.push("/edit/" + id)}>
                <DeleteIcon />
                </IconButton>
              </div>
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
