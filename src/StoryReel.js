import React from 'react';
import './StoryReel.css';
import Story from './Story';

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story
  image="/Rectangle.png"
  profileSrc="/pf2.png"
  title="Sonny Sangha"
/>

<Story
  image="/Stories.png"
  profileSrc="/pf3.png"
  title="Rafeh Qazi"
/>

<Story
  image="/videocall.png"
  profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591649190638gettyimages-1032924656.jpeg?v=1597932630"
  title="Frankie"
/>

<Story
  image="/pic2.png"
  profileSrc="/pf1.png"
  title="Aaron Bernath"
/>

<Story
  image="/red.png"
  profileSrc="/Oval.png"
  title="Naz"
/>


      
    </div>
  )
}

export default StoryReel
