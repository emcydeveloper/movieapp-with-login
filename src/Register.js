import "./style.css";
import { useState } from "react";
import SignUpHeader from "./SignUpHeader";

export default function Register() {


  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    comments: "",
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
      fetch('https://movieapp-with-login.herokuapp.com/signup', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success!! User added', data);
      alert('Success!! User added');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error');
    });
    
    event.preventDefault();
  }

  return (
    <div className="register">
      <SignUpHeader />
      <div className="register-form">
      <h1>Register Page</h1>
      <h3>Validation - In-Progress</h3>
      <form onSubmit={handleSubmit}> 
        <div>
          {/* <label htmlFor="firstname">First Name</label> */}
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstname"
            value={formData.firstname}
          />
          {/* <label htmlFor="lastname">Last Name</label> */}
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastname"
            value={formData.lastname}
          />
        </div>
        <div>
          {/* <label htmlFor="username">User Name</label> */}
          <input
            type="text"
            placeholder="User Name"
            onChange={handleChange}
            name="username"
            value={formData.username}
          />

          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>
        <div>
          {/* <label htmlFor="mobile">Mobile no.</label> */}
          <input
            type="tel"
            placeholder="Mobile"
            onChange={handleChange}
            name="mobile"
            value={formData.mobile}
          />

          {/* <label htmlFor="country">Country</label> */}
          <input
            type="text"
            placeholder="Country"
            onChange={handleChange}
            name="country"
            value={formData.country}
          />
        </div>
        <div>
          {/* <label htmlFor="city">City</label> */}
          <input
            type="text"
            placeholder="City"
            onChange={handleChange}
            name="city"
            value={formData.city}
          />

          {/* <label htmlFor="state">State</label> */}
          <input
            type="text"
            placeholder="State"
            onChange={handleChange}
            name="state"
            value={formData.state}
          />
        </div>
        {/* <label htmlFor="comments">Comments</label> */}
        <div className="form-comments">
          <textarea className="form-textarea"
            value={formData.comments}
            placeholder="Comments"
            onChange={handleChange}
            name="comments"
          />
        </div>
        <button>Submit</button>
      </form>
      </div>
    </div>
  );
}
