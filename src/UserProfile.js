import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

export default function UserProfile() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  let userFetch = () => {
    fetch(`https://movieapp-with-login.herokuapp.com/getusers`, {
      method: "get",
    })
      .then((userData) => userData.json())
      .then((userList) => setUsers(userList));
  };

  useEffect(userFetch, []);

  let displayUsers = users.map((user, i) => {
    let renderUser = (
      <tr>
        <td>{i + 1}</td> <td>{user.firstname}</td> <td>{user.lastname}</td>
        <td>{user.username}</td> <td>{user.email}</td>
        <td>
          <IconButton onClick={() => history.push("useredit/" + user.id)}>
            Edit
          </IconButton>
        </td>
        <td>
          <IconButton onClick={() => history.push("useredit/" + user.id)}>
            Delete
          </IconButton>
        </td>
      </tr>
    );

    return renderUser;
  });

  return (
    <div className="userprofile">
      <Header />
      <div className="userprofile-content">
        {/* firstName,lastname,username,email */}
        <table className="userprofile-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>FirstName</th>
              <th>Lastname</th>
              <th>Username</th>
              <th>e-Mail</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{displayUsers}</tbody>
        </table>
        {/* {displayUsers} */}
      </div>
    </div>
  );
}
