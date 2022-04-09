import "./style.css";
import { useEffect, useState } from "react";
import { useHistory,useParams } from "react-router-dom";
import Header from "./Header";

export default function EditUser(){
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

      function handleDelete(){
        // console.log(movieid);
        fetch(`https://movieapp-with-login.herokuapp.com/deleteuser/${userid}`, { method: 'DELETE' })
        .then(() => alert('Delete successful')).then(() => history.push("/userprofile"));
      }

    function handleSubmit(event) {
        
        delete userData["_id"];
        fetch(`https://movieapp-with-login.herokuapp.com/edituser/${userid}`, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success!! User updated', data);
        alert('Success!! User updated');
      })
      .then(()=>history.push("/userprofile"))
      .catch((error) => {
        console.error('Error:', error);
        alert('Error');
      });
      
      event.preventDefault();
    }

    
    return(
        <div className="useredit">
            <Header />
            
            <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstname"
            value={userData.firstname}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastname"
            value={userData.lastname}
          />
        </div>
        <div>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            placeholder="User Name"
            onChange={handleChange}
            name="username"
            value={userData.username}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={userData.email}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile no.</label>
          <input
            type="tel"
            placeholder="Mobile"
            onChange={handleChange}
            name="mobile"
            value={userData.mobile}
          />

          <label htmlFor="country">Country</label>
          <input
            type="text"
            placeholder="Country"
            onChange={handleChange}
            name="country"
            value={userData.country}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="City"
            onChange={handleChange}
            name="city"
            value={userData.city}
          />

          <label htmlFor="state">State</label>
          <input
            type="text"
            placeholder="State"
            onChange={handleChange}
            name="state"
            value={userData.state}
          />
        </div>
        <label htmlFor="comments">Comments</label>
        <div className="form-comments">
          <textarea className="form-textarea"
            value={userData.comments}
            placeholder="Comments"
            onChange={handleChange}
            name="comments"
          />
        </div>
        <button>Save</button>
      </form>
      <button className="useredit-delbtn" onClick={handleDelete}>Delete</button>
      </div>
        
    )
}