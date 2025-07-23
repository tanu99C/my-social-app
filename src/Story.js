import React from 'react'
import './Story.css';
import { Avatar } from '@mui/material';

const Story = ({ image, profileSrc, title }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profileSrc} className="story__avatar" />
      <h4 className="story__title">{title}</h4>
    </div>
  );
};
export default Story
