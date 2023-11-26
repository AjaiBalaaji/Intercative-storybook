import React, { useState } from 'react';
import { MenuFoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Page3.css';
// import { Content } from 'antd/es/layout/layout';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const audioElement = document.getElementById('audioPlayer');

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };

  return (
    <div className="audio-container">
      <audio id="audioPlayer" src="audio.mpeg" />
      <button className="bgm" onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

const LikeDislikeButton = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
  
    const handleLike = () => {
      setIsLiked(!isLiked);
      // You can add additional logic here (e.g., send a request to like the content)
    };
  
    const handleDislike = () => {
      setIsDisliked(!isDisliked);
      // You can add additional logic here (e.g., send a request to dislike the content)
    };
  
    return (
      <div>
        <button className='like'
          style={{ backgroundColor: isLiked ? '#4caf50' : 'white', color: isLiked ? 'white' : 'black' }}
          onClick={handleLike}
        >
          Like
        </button>
    
        <button className='dislike'
          style={{ backgroundColor: isDisliked ? '#f44336' : 'white', color: isDisliked ? 'white' : 'black' }}
          onClick={handleDislike}
        >
          Dislike
        </button>
      </div>
    );
  };
  


  



const ExampleCss = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDayMode, setIsDayMode] = useState(true);
  const navigate=useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNextPage = () => {
    navigate('/Page2');
  };
 
const toggleDayNightMode = () => {
    setIsDayMode(!isDayMode);
    const body = document.querySelector('body');
    const content = document.querySelector('.main-content');
    const responsiveBoxes = document.querySelectorAll('.responsive-box11'); 
  
    if (isDayMode) {
      body.style.backgroundColor = '#111';
      content.style.color = 'white';
  
      
      responsiveBoxes.forEach((box) => {
        const paragraphs = box.querySelectorAll('p');
        paragraphs.forEach((paragraph) => {
          paragraph.style.color = 'white';
        });
      });
    } else {
      body.style.backgroundColor = '#fff';
      content.style.color = 'black';
  
      
      responsiveBoxes.forEach((box) => {
        const paragraphs = box.querySelectorAll('p');
        paragraphs.forEach((paragraph) => {
          paragraph.style.color = 'black';
        });
      });
    }
  };
  
  

  return (
    <>
      <div className={`wrapper ${isNavOpen ? 'is-nav-open' : ''} ${isDayMode ? 'day-mode' : 'night-mode'}`}>
        <div className="nav">
          <MenuFoldOutlined
            className="navv_icon"
            type="menu-fold"
            onClick={toggleNav}
          />
          <div className="nav__body">
            <div className='charac1'>
              <p><b>REINER BRAUN</b></p>
              <img src="https://i.pinimg.com/564x/90/3d/ce/903dcec38136c4f05780c2a630bf9061.jpg" alt="eren" />
            </div>
            <div className='charac2'>
              <p><b>YMIR</b></p>
              <img src="https://i.pinimg.com/564x/fc/43/68/fc43682eee065b2e3db03d50b924e92f.jpg" alt="eren" />
            </div>
            <div className='charac3'>
              <p><b>BERTOLT HOOVER</b></p>
              <img src="https://i.pinimg.com/564x/74/bc/d7/74bcd7eafcbfdee79f1cbf0ed3cbec18.jpg" alt="eren" />
            </div>
            <div className='charac4'>
              <p><b>HANGE ZOE</b></p>
              <img src="https://i.pinimg.com/564x/58/41/4b/58414bc1e78396570465200950cffbc8.jpg" alt="eren" />
            </div>
          </div>
        </div>
        <div className="content">
          <button className="toggle-button1" onClick={toggleNav}>
            <b>CHARACTERS-SEASON 2</b>
          </button>
          <button className="toggle-button2" onClick={toggleDayNightMode}>
            {isDayMode ? 'Night Mode' : 'Day Mode'}
          </button>
          <div className="main-content">
            <div className='head2'>
              <img src="https://i.pinimg.com/originals/60/d5/cc/60d5cc3d9c9397d6c44ba39844230d4c.gif" alt="aot" />
              <p><b>ATTACK ON TITAN-SEASON 2</b></p>
            </div>
          </div>
        </div>
      </div>
      <div className="responsive-box11">
        <div className="content1">
          <h2>SEASON 2-BEAST TITAN ENTERS</h2>
          <p>Attack on Titan plot and characters were revealed. The series starts with the 104th Training Division discovering that there are Titans inside the walls, and that it is their skin that helps to protect humanity. Everyone came to that conclusion when Armin realized that the Titans only attack certain parts of the walls.</p>
        </div>
        <video width="200" height="200" controls>
        <source src="beast.mkv" type="video/mp4" />
        </video>
      </div>
      <div className="responsive-box11">
        <div class="image2">
          <img src="https://i.pinimg.com/564x/0f/18/15/0f18151a38972f6c3c473418d456f1c0.jpg" alt="image5" height={150} />
        </div>
        <div className="content2">
          <p> Beast Titan appears for the first time and proves to be extremely intelligent, since he is able to communicate with both Titans and humans. This time, Ymir confesses that she is also a Titan and defends Reiner, Bertholdt, who also talk about being the Colossal and the Armored Titan respectively. Ymir decides to protect them and Krista with her life. Shortly after, Krista reveals that her true identity is Historia Reiss, a descendant of a family of aristocrats.</p>
        </div>
      </div>
      <div className="responsive-box11">
        <div className="content3">
          <p>Eren, Mikasa and the others get trapped around Titans. In order to save Eren, Hannes sacrifices himself and the Smiling Titan eats him in front of Eren’s eyes again. In that moment of shock, Mikasa thanks him for helping her and for teaching her how to live. Nevertheless, when it seems that Mikasa is going to kiss Eren, he says that he cannot understand many things in life and he stands up.Eren’s new power: he can control the Titans, since all those who were nearby started to attack Reiner.
It is at this moment that this power is revealed as the “Coordinate”, and that this is the reason why Reiner, Bertholdt and Ymir wanted to kidnap Eren.</p>
        </div>
        <div class="image3">
          <img src="https://i.pinimg.com/736x/36/51/59/365159c620f469baa6ca28ceb069fff9.jpg" alt="image5" height={150} />
        </div>
      </div>
      <div className="responsive-box11">
        <div class="image4">
          <img src="https://i.pinimg.com/564x/9c/3c/ff/9c3cff078d4bd74484ef9d0b88446ac8.jpg" alt="image5" />
        </div>
        <div className="content4">
          <p>At the end of the season, Ymir points out that she will go with Reiner, so they can come back home. At the same time, Levi, Pixis and Erwin learn about the theory that the Titans they have been facing are humans. Resulting in three to begin to question their actions. In the last scene, the Beast Titan appears on the Wall with a person standing on his shoulders, leaving doubts about his identity. </p>
        </div>
      </div>
      <AudioPlayer />
      <div className='feedback'><h3><b>REALLY LIKED THE SEASON??</b></h3><LikeDislikeButton/></div>
      <button className='nextbut' onClick={handleNextPage}>Previous</button>
    </>
  );
};

export default ExampleCss;
