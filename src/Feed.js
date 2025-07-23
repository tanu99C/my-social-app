import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { db } from "./firebase"; // UPDATE: named import instead of default
import { collection, onSnapshot } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore"; // Import query and orderBy for sorting posts

const Feed = () => {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
  const q = query(
    collection(db, "posts"),
    orderBy("timestamp", "desc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    setPosts(snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data()
    })));
  });

    // Clean up listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
