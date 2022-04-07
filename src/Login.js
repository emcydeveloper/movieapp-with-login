import "./style.css";
import SignUpHeader from "./SignUpHeader";
import { useState } from "react";

export default function Login() {

    const [formData, setFormData] = useState({
        
        username: "",
        
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
 
      
        event.preventDefault();
      }

  return (
    <div className="login">
      <SignUpHeader />
      <div className="login-form">
        <h1>login Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">UserName: </label>
            <input
            type="text"
            placeholder="User Name"
            onChange={handleChange}
            name="username"
            value={formData.username}
          />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
