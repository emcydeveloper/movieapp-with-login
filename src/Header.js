import { Link } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


export default function Header(){

    return(
        <div className="header">
            <h1>Welcome to Movie app</h1>
            <nav className="header-nav">
            <ul>
            <li><Link to="/home"><HomeRoundedIcon />Home</Link></li>
            <li><Link to="/search"><SearchRoundedIcon />Search</Link></li>
            <li><Link to="/add"><AddCircleOutlineRoundedIcon />Add Movie</Link></li>
            <li><Link to="/userprofile"><PeopleRoundedIcon />Users</Link></li>
            <li><Link to="/login"><LogoutRoundedIcon />Logout</Link></li>
            </ul>
            </nav>

        </div>
    )
}