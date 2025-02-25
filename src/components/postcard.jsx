// components/PostCard.jsx
import React from "react";
import LikeButton from "../components/likebutton";

const PostCard = ({ post }) => {
  return (
    <div style={styles.card}>
      <img src={post.profilePic} alt="Profile" style={styles.profilePic} />
      <div style={styles.content}>
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    backgroundColor: "#fff",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  profilePic: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "15px",
  },
  content: {
    flex: 1,
  },
};

export default PostCard;
