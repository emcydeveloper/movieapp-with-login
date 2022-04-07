import "./style.css";
import SignUpHeader from "./SignUpHeader";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

    const [formData, setFormData] = useState({username: "",});


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
 
      history.push("/home")
        event.preventDefault();
      }

  return (
    <div className="login">
      <SignUpHeader />
      <div className="login-form">
        <h3>Login Page - In-Progress, you can directly login by clicking Login button</h3>
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
