import { Link } from "react-router-dom";

export default function Header(){

    return(
        <div className="header">
            <h1>Welcome to Movie app</h1>
            <nav className="header-nav">
            <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/add">Add Movies</Link></li>
            <li><Link to="/userprofile">User profile</Link></li>
            <li><Link to="/login">Logout</Link></li>
           
                </ul>
            </nav>
        </div>
    )
}