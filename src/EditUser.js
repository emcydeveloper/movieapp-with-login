import "./style.css";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "./Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EditUser() {
  const { userid } = useParams();
  const history = useHistory();

  const [userData, setuserData] = useState({
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
  
  let userFetch = () => {
    fetch(`https://movieapp-with-login.herokuapp.com/getuser/${userid}`, {
      method: "get",
    })
      .then((userData) => userData.json())
      .then((userList) => setuserData(userList));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(userFetch, []);

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setuserData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleDelete() {
    // console.log(movieid);
    fetch(`https://movieapp-with-login.herokuapp.com/deleteuser/${userid}`, {
      method: "DELETE",
    })
      .then(() => alert("Delete successful"))
      .then(() => history.push("/userprofile"));
  }

  function handleSubmit(event) {
    delete userData["_id"];
    fetch(`https://movieapp-with-login.herokuapp.com/edituser/${userid}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success!! User updated", data);
        alert("Success!! User updated");
      })
      .then(() => history.push("/userprofile"))
      .catch((error) => {
        console.error("Error:", error);
        alert("Error");
      });

    event.preventDefault();
  }

  return (
    <div className="useredit">
      <Header />
      <div className="edituser-form">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "40ch",
              display: "flex",
              flexWrap: "wrap",
            },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              required
              id="firstname"
              label="First Name"
              value={userData.firstname}
              name="firstname"
              onChange={handleChange}
            />
            <TextField
              required
              id="lastname"
              label="Last Name"
              value={userData.lastname}
              name="lastname"
              onChange={handleChange}
            />
            <TextField
              required
              id="username"
              label="Username"
              value={userData.username}
              name="username"
              onChange={handleChange}
            />
            <TextField disabled id="password" label="Password" />
            <TextField
              required
              id="email"
              label="e-Mail"
              value={userData.email}
              name="email"
              onChange={handleChange}
            />
            <TextField
              id="mobile"
              label="Mobile number"
              type="number"
              InputLabelProps={{ shrink: true }}
              value={userData.mobile}
              name="mobile"
              onChange={handleChange}
            />
            <TextField
              required
              id="city"
              label="City"
              value={userData.city}
              name="city"
              onChange={handleChange}
            />
            <TextField
              required
              id="state"
              label="State"
              value={userData.state}
              name="state"
              onChange={handleChange}
            />
            <TextField
              id="comments"
              label="Comments"
              multiline
              rows={4}
              value={userData.comments}
              name="comments"
              onChange={handleChange}
            />
          </div>
          <div className="btn-container">
            <button className="success">Submit</button>
          </div>
        </Box>
        <div className="btn-container">
            <button className="delete" onClick={handleDelete}>Delete</button>
          </div>
      </div>
    </div>
  );
}
