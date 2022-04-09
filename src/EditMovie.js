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

  function handleDelete(){
    // console.log(movieid);
    fetch(`https://movieapp-with-login.herokuapp.com/deletemovie/${movieid}`, { method: 'DELETE' })
    .then(() => alert('Delete successful')).then(() => history.push("/home"));
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="moviename">Movie Name</label>
          <input
            type="text"
            placeholder="Enter the Movie Name"
            onChange={handleChange}
            name="moviename"
            value={formData.moviename}
          />
          <label htmlFor="img">Image URL</label>
          <input
            type="text"
            placeholder="Image URL"
            onChange={handleChange}
            name="img"
            value={formData.img}
          />

          <label htmlFor="rating">Ratings</label>
          <input
            type="text"
            placeholder="Ratings"
            onChange={handleChange}
            name="rating"
            value={formData.rating}
          />

          <label htmlFor="about">About the Movie</label>
          <input
            type="text"
            placeholder="About Movies"
            onChange={handleChange}
            name="about"
            value={formData.about}
          />

          <label htmlFor="trailer">Trailer</label>
          <input
            type="url"
            placeholder="Enter The Trailer URL"
            onChange={handleChange}
            name="trailer"
            value={formData.trailer}
          />

          <button>Save</button>
          
        </form>
        <button className="editmovie-delbtn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
