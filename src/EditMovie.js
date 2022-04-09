import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from "./Header";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditMovie() {
  const history = useHistory();
  const { movieid } = useParams();

  const [formData, setFormData] = useState({
    moviename: "",
    img: "",
    rating: 0,
    about: "",
    trailer: "",
  });

  let movieFetch = () => {
    fetch(`https://movieapp-with-login.herokuapp.com/getmovie/${movieid}`, {
      method: "get",
    })
      .then((movieData) => movieData.json())
      .then((moviesList) => setFormData(moviesList));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(movieFetch, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleDelete() {
    // console.log(movieid);
    fetch(`https://movieapp-with-login.herokuapp.com/deletemovie/${movieid}`, {
      method: "DELETE",
    })
      .then(() => alert("Delete successful"))
      .then(() => history.push("/home"));
  }

  function handleSubmit(event) {
    delete formData["_id"];
    // console.log(JSON.stringify(formData))
    fetch(`https://movieapp-with-login.herokuapp.com/editmovie/${movieid}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Save Successfull");
      })
      .then(() => history.push("/home"))
      .catch((error) => {
        console.error("Error:", error);
        alert("Error");
      });
    // console.log("Temporary disabled");
    // alert("Temporary disabled")

    event.preventDefault();
  }

  return (
    <div className="editmovie">
      <Header />
      <div className="addmovie-form">
      <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '40ch',display: 'flex', flexWrap: 'wrap'  },}} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField required id="moviename" label="Movie Name" value={formData.moviename} name="moviename" onChange={handleChange} />
        <TextField required id="img" label="Image URL" value={formData.img} name="img" onChange={handleChange} />
        <TextField required id="rating" label="Ratings" value={formData.rating} name="rating" onChange={handleChange} />
        <TextField required id="about" label="About the movie" multiline rows={4} value={formData.about} name="about" onChange={handleChange}  />
        <TextField id="trailer" label="Trailer Link" value={formData.trailer} name="trailer" onChange={handleChange} />
      </div>
      
        <div className="btn-container">
          <button className="success">Save</button>
        </div>
        
      </Box>

      <div className="btn-container">
          <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    
      </div>
    </div>
  );
}
