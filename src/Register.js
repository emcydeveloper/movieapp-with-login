import "./style.css";
// import { useState } from "react";
import SignUpHeader from "./SignUpHeader";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();

  const onSubmit = (event) => {
    
    fetch("https://movieapp-with-login.herokuapp.com/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
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
    // event.preventDefault();
  }


  return (


    <div className="register" >
      <SignUpHeader />
      <div className="register-form" >
      
      <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '40ch',display: 'flex', flexWrap: 'wrap'  },}} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div>

        <TextField id="firstname" placeholder="First Name *" name="firstname" {...register("firstname", {  required:true, minLength: 3 })}  />
        {errors.firstname && <p>Required First Name with minimun 3 letters</p>}
         {/* value={formData.firstname} name="firstname"  onChange={handleChange}*/}

        <TextField id="lastname" placeholder="Last Name *" name="lastname" {...register("lastname", {  required:true, minLength: 3 })} />
        {errors.lastname && <p>Required Last Name with minimun 3 letters</p>}

        <TextField id="username" placeholder="Username *" name="username" {...register("username", {  required:true, minLength: 5 })} />
        {errors.username && <p>Required Username with minimun 5 letters</p>}

        <TextField disabled id="password" placeholder="Password" />

        <TextField id="email" placeholder="e-Mail *" name="email" {...register("email", 
                        { required: true,  
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                        })} />                        
        {errors.email && <p>Please enter the valid email address</p>}

        <TextField id="mobile" placeholder="Mobile number *" type="number" InputplaceholderProps={{ shrink: true, }} name="mobile" {...register("mobile", {  required:true, minLength:10, maxLength: 10 })} />
        {errors.mobile && <p>Please enter the valid mobile number</p>}

        <TextField id="city" placeholder="City *" name="city" {...register("city", {  required:true, minLength: 3 })} />
        {errors.city && <p>Required City with minimun 3 letters</p>}

        <TextField id="state" placeholder="State *" name="state" {...register("state", {  required:true, minLength: 3 })} />
        {errors.state && <p>Required State with minimun 3 letters</p>}

        <TextField id="comments" placeholder="Comments" multiline rows={4} name="comments" {...register("comments", {  required:false, minLength: 6 })}  />
      </div>
      
      <div className="btn-container">
          <button className="success">Signup</button>
          </div>
    </Box>
    
    
    </div>

    </div>
  );
}
