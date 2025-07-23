import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideoCamIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmotionIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase"; // Your configured Firestore
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // ✅ correct modular imports

const MessageSender = () => {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.trim() === "" && imageUrl.trim() === "") return;

    try {
      await addDoc(collection(db, "posts"), {
        message: input,
        timestamp: serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      });

      setInput("");
      setImageUrl("");
    } catch (err) {
      console.error("Error adding post: ", err);
    }
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user?.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmotionIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
