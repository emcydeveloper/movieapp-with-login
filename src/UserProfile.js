import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
      <TableRow key={i}>
        <TableCell>{i + 1}</TableCell>
        <TableCell align="right">{user.firstname}</TableCell>
        <TableCell align="right">{user.lastname}</TableCell>
        <TableCell align="right">{user.username}</TableCell>
        <TableCell align="right">{user.email}</TableCell>
        <TableCell align="right">
          {" "}
          <IconButton onClick={() => history.push("useredit/" + user.id)}>
            {" "}
            <EditIcon />{" "}
          </IconButton>
        </TableCell>
        <TableCell align="right">
          {" "}
          <IconButton onClick={() => history.push("useredit/" + user.id)}>
            {" "}
            <DeleteIcon />{" "}
          </IconButton>{" "}
        </TableCell>
      </TableRow>
    );

    return renderUser;
  });

  return (
    <div className="userprofile">
      <Header />
      <div className="userprofile-content">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">e-Mail</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{displayUsers}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
