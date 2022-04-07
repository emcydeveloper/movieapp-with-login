import {  } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

export default function SignUpHeader(){

    return(
        <div className="signupheader">
            <h1>Welcome to MOVIE app</h1>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Signup</Link></li>
            </ul>

           
        </div>
    )
}