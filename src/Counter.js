import React from "react";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

export default function Counter({ sendLike, sendDislike, id }) {
  // {sendLike,sendDislike}

  let [likes, setLikes] = useState(sendLike);
  let [disLikes, setDislikes] = useState(sendDislike);
  const [visible, setVisible] = useState(true);

  function updateLike(data) {
    setVisible(false);

    fetch(`https://movieapp-with-login.herokuapp.com/editmovie/${id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .then(() => setVisible(true))
      .catch((error) => {
        console.error("Error:", error);
        alert("Error");
      });
  }

  function likeHandler() {
    setLikes((previousState) => previousState + 1);
    let data = {
      like: likes + 1,
    };
    updateLike(data);
  }

  function disLikeHandler() {
    setDislikes((previousState) => previousState + 1);
    let data = {
      dislike: disLikes + 1,
    };
    updateLike(data);
  }

  return (
    <div>
      {visible && (
        <IconButton className="movie-like" onClick={likeHandler}>
          <Badge badgeContent={likes} color="secondary">
            👍
          </Badge>
        </IconButton>
      )}
      {visible && (
        <IconButton className="movie-dislike" onClick={disLikeHandler}>
          <Badge badgeContent={disLikes} color="success">
            👎
          </Badge>
        </IconButton>
      )}
    </div>
  );
}
