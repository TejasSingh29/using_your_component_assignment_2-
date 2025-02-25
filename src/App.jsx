// App.jsx
import React from "react";
import PostCard from "./components/postcard";

const posts = [
  {
    id: 1,
    username: "john_doe",
    profilePic: "https://tse4.mm.bing.net/th?id=OIP.VJ6Han-RZj6Vl115t1FpdAHaE8&pid=Api&P=0&w=300&h=300",
    content: "Hello everyone! Excited to be here. 😊",
  },
  {
    id: 2,
    username: "jane_smith",
    profilePic: "https://thewowstyle.com/wp-content/uploads/2015/02/beautiful-mountain.jpg",
    content: "What a beautiful day! 🌞",
  },
  {
    id: 3,
    username: "alex_92",
    profilePic: "https://people.com/thmb/jd0rSoHAM2FCO6vqteSqORthNzc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/national-geographic-photo-winners-021723-8-26bcb992ec684e618652f80a9ba900f8.jpg",
    content: "Just finished a great book! 📖",
  },
];

const App = () => {
  return (
    <div>
      <h1>Social Media Feed</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
