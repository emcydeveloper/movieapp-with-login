import { useState } from "react";
import Header from "./Header";

export default function Search() {
  const [formData, setFormData] = useState({
    id: 0,
    moviename: "",
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

  function handleSearch(event) {
    //   fetch('http://localhost:5000/signup', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    //   alert('Success');
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    //   alert('Error');
    // });

    event.preventDefault();
  }

  return (
    <div className="search">
      <Header />
      <h1>search</h1>
      <input
        type="text"
        placeholder="Enter the Movie Name"
        onChange={handleChange}
        name="moviename"
        value={formData.moviename}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
