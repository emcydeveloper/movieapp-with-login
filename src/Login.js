import "./style.css";
import SignUpHeader from "./SignUpHeader";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [visible,setVisible] = useState(false);
  const [formData, setFormData] = useState({ username: "" });


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
    // console.log(formData.username);
    fetch(
      `https://movieapp-with-login.herokuapp.com/login/${formData.username}`,
      {
        method: "get",
      }
    )
      // .then((response) => response.status === 200 && )
      .then(
        (userData) => {
          if (userData.status === 200) {
            userData
              .json()
              .then((userList) => {setVisible(false);history.push("/home")})
          } else {
            console.log(userData.statusText);
            setVisible(true)
          }
        },
        (err) => console.log("error - ", err)
      );

    // history.push("/home")
    event.preventDefault();
  }

  return (
    <div className="login">
      <SignUpHeader />
      <div className="login-form">
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
        {visible && <h1>Invalid username!!</h1>}
      </div>
    </div>
  );
}
