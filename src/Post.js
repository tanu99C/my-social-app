import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBuubleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';  
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';

const Post = ({profilePic, image, username, timestamp, message}) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
           <h3>{username}</h3>
          
          <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>



      <div className="post__options">
        <div className="post__option">
           <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBuubleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>


         <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
          <p>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
