import { useState } from "react";
import Header from "./Header";

export default function AddMovie() {
  //          <h3>{id}</h3>
  //   <h3>{moviename}</h3>
  //   <h3>{img}</h3>
  //   <h3>{rating}</h3>
  //   <h3>{like}</h3>
  //   <h3>{dislike}</h3>
  //   <h3>{about}</h3>
  //   <h3>{trailer}</h3>

  const [formData, setFormData] = useState({
    moviename: "",
    img: "https://www.eglsf.info/wp-content/uploads/image-missing.png",
    rating: "",
    like:0,
    dislike:0,
    about: "",
    trailer: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
      fetch('https://movieapp-with-login.herokuapp.com/addmovie', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Success!! Movie added');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error');
    });

    event.preventDefault();
  }

  return (
    <div className="addmovie">
      <Header />
      <h1>Add Movie</h1>

      {/* moviename: "",
        img: "",
        rating: "",
        about: "",
        trailer: "", */}
        <div className="addmovie-form">
      <form onSubmit={handleSubmit}>
        
          {/* <label htmlFor="firstname">First Name</label> */}
          <input
            type="text"
            placeholder="Enter the Movie Name"
            onChange={handleChange}
            name="moviename"
            value={formData.moviename}
          />
          {/* <label htmlFor="lastname">Last Name</label> */}
          <input
            type="text"
            placeholder="Image URL"
            onChange={handleChange}
            name="img"
            value={formData.img}
          />
     
        
          {/* <label htmlFor="username">User Name</label> */}
          <input
            type="text"
            placeholder="Ratings"
            onChange={handleChange}
            name="rating"
            value={formData.rating}
          />

          {/* <label htmlFor="email">Email</label> */}
          <input
            type="text"
            placeholder="About Movies"
            onChange={handleChange}
            name="about"
            value={formData.about}
          />
      
        
          {/* <label htmlFor="mobile">Mobile no.</label> */}
          <input
            type="url"
            placeholder="Enter The Trailer URL"
            onChange={handleChange}
            name="trailer"
            value={formData.trailer}
          />
       
        <button>Add</button>
      </form>
      </div>
    </div>
  );
}
