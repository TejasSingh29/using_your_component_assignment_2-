// components/LikeButton.jsx
import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        padding: "8px 16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
        backgroundColor: liked ? "red" : "#ddd",
        color: liked ? "white" : "black",
      }}
    >
      {liked ? "Liked ❤️" : "Like 🤍"}
    </button>
  );
};

export default LikeButton;
