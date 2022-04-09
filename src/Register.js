import "./style.css";
import { useState } from "react";
import SignUpHeader from "./SignUpHeader";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Register() {
  const history = useHistory();
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
    // console.log(name, value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    fetch("https://movieapp-with-login.herokuapp.com/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success!! User added", data);
        alert("Success!! User added");
      })
      .then(() => history.push("/login"))
      .catch((error) => {
        console.error("Error:", error);
        alert("Error");
      });

    event.preventDefault();
  }

  return (


    <div className="register" >
      <SignUpHeader />
      <div className="register-form" >
      
      <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '40ch',display: 'flex', flexWrap: 'wrap'  },}} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField required id="fullWidth" label="First Name" value={formData.firstname} name="firstname" onChange={handleChange} />
        <TextField required id="fullWidth" label="Last Name" value={formData.lastname} name="lastname" onChange={handleChange} />
        <TextField required id="username" label="Username" value={formData.username} name="username" onChange={handleChange} />
        <TextField disabled id="password" label="Password" />
        <TextField required id="email" label="e-Mail" value={formData.email} name="email" onChange={handleChange} />
        <TextField id="mobile" label="Mobile number" type="number" InputLabelProps={{ shrink: true, }} value={formData.mobile} name="mobile" onChange={handleChange} />
        <TextField required id="city" label="City" value={formData.city} name="city" onChange={handleChange} />
        <TextField required id="state" label="State" value={formData.state} name="state" onChange={handleChange} />
        <TextField id="comments" label="Comments" multiline rows={4} value={formData.comments} name="comments" onChange={handleChange}  />
      </div>
      <button>Submit</button>
    </Box>
    
    
    </div>
    </div>
  );
}
