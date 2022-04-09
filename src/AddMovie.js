import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Header from "./Header";
import { useHistory } from "react-router-dom";

export default function AddMovie() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    moviename: "",
    img: "https://www.eglsf.info/wp-content/uploads/image-missing.png",
    rating: "",
    like: 0,
    dislike: 0,
    about: "",
    trailer: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    fetch("https://movieapp-with-login.herokuapp.com/addmovie", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Success!! Movie added");
      })
      .then(() => history.push("/home"))
      .catch((error) => {
        console.error("Error:", error);
        alert("Error");
      });

    event.preventDefault();
  }

  return (
    <div className="addmovie">
      <Header />
      <h1>Add Movie</h1>
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

      </div>
    </div>
  );
}
