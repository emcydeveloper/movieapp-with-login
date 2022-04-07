import React from "react";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

export default function Counter({sendLike,sendDislike}) {
  // {sendLike,sendDislike}
  

  let [like, setLike] = useState(sendLike);
  let [disLike, setDislike] = useState(sendDislike);

  //   function likeHandler() {
  //     setLike((previousState) => previousState + 1);
  //   }

  //   function disLikeHandler() {
  //     setDislike((previousState) => previousState + 1);
  //   }

  return (
    <div>
    <IconButton
      className="movie-like"
      onClick={() => {
        setLike(like + 1);
      }}
    >
      <Badge badgeContent={like} color="secondary">
        👍
      </Badge>
    </IconButton>
    <IconButton
      className="movie-dislike"
      onClick={() => {
        setDislike(disLike + 1);
      }}
    >
      <Badge badgeContent={disLike} color="success">
        👎
      </Badge>
    </IconButton>
  </div>
  );
}
