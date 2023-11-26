import React, { useState } from 'react';
import { MenuFoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Page2.css';

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
        <button className='bgm' onClick={togglePlay}>
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
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);

    
  };

  

  const handleNextPage = () => {
    navigate('/Page3');
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
      <div className={`wrapper ${isNavOpen ? 'is-nav-open' : ''}`}>
        <div className="nav">
          <MenuFoldOutlined
            className="navv_icon"
            type="menu-fold"
            onClick={toggleNav}
          />
          <div className="nav__body">
            <div className='charac1'>
            <p><b>EREN YEAGER</b></p>
            <img src="https://i.pinimg.com/736x/1f/36/f8/1f36f84ef0d3df02e721690c1cc5f9a4.jpg" alt="eren" />
            {/* <p>Eren Yeager, also spelled Eren Jaeger is the protagonist of the Attack on Titan manga series created by Hajime Isayama.</p> */}
            </div>
            <div className='charac2'>
            <p><b>MIKASA</b></p>
            <img src="https://i.pinimg.com/564x/7d/bf/b7/7dbfb7a34055389b0b1e34444656d789.jpg" alt="eren" />
            {/* <p>Eren's childhood friend.</p> */}
            </div>
            <div className='charac3'>
            <p><b>ARMIN</b></p>
            <img src="https://i.pinimg.com/736x/d9/7f/b7/d97fb72aacd51ab943e826a09e269280.jpg" alt="eren" />
            {/* <p>He is a refugee from Shiganshina and Eren Yeager and Mikasa Ackerman's best friend from childhood.</p> */}
            </div>
            <div className='charac4'>
            <p><b>LEVI</b></p>
            <img src="https://i.pinimg.com/564x/eb/d8/53/ebd8539bc9ae2b617e6b0135406f1a12.jpg" alt="eren" />
            {/* <p>He is a refugee from Shiganshina and Eren Yeager and Mikasa Ackerman's best friend from childhood.</p> */}
            </div>
          </div>
        </div>
        <div className="content">
          <button className="toggle-button" onClick={toggleNav}>
            <b>CHARACTERS-SEASON 1</b>
          </button>
          <button className="toggle-button2" onClick={toggleDayNightMode}>
            {isDayMode ? 'Night Mode' : 'Day Mode'}
          </button>
          <div className="main-content">
          <div className='head2'>
              <img src="https://i.pinimg.com/originals/b0/b8/b9/b0b8b9d64705a4e3ae4a2e6d3597e9bd.gif" alt="aot" />
              <p><b>ATTACK ON TITAN-Shingeki no Kyojin</b></p>
            </div>
          
            {/* <div className='head3'>
            <img src="https://i.pinimg.com/originals/b0/b8/b9/b0b8b9d64705a4e3ae4a2e6d3597e9bd.gif" alt="aot" />
            <p><b>ATTACK ON TITAN</b></p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="responsive-box11">
        <div className="content1">
          <h2>SEASON 1</h2>
          <p>The story of Attack on Titan develops in a world where humans are an endangered species. For more than a hundred years, they have lived in fear of the Titans, a mysterious and violent race of human-like giants that wander outside the walls and that look for people to devour.</p>
        </div>
        <div class="image1">
          <img src="https://i.pinimg.com/736x/2f/a5/ce/2fa5ce972b7abf47fc73677e4284c1dc.jpg" alt="image5" />
        </div>
      </div>
      <div className="responsive-box11">
      <div class="image2">
          <img src="https://qph.cf2.quoracdn.net/main-qimg-029b86cd9efc2ae1c03274cd6a2ac0db-lq" alt="image5" height={150}/>
        </div>
        <div className="content2">
          <p>Eren Jaeger lives in Shiganshina, along with Armin Arlert, his best friend, and Mikasa Ackerman, his adopted sister that his family recently took in. Together, they live a relatively peaceful life until the day Titans burst into their city with the help of an enormous Titan that breaks the first wall of the city, Wall Maria. Among the violence and the confusion, Eren is the witness of how his mother is brutally eaten by a Titan during the attack. Full of anger and pain, the young boy swears revenge on the titans.</p>
        </div>
        
      </div>
      <div className="responsive-box11">
        <div className="content3">
          <p> Eren, Armin and Mikasa decide to join the army and fight for the humans. During the five years training, Eren is the most passionate and aggressive soldier, while Armin becomes a great strategist, and Mikasa, the strongest and greatest cadet in the program.shortly after their graduation, the Titans, led again by the Colossal Titan, come back to launch another offensive attack.</p>
        </div>
        <div class="image3">
          <img src="https://i.gifer.com/4Dhv.gif" alt="image5" height={150}/>
        </div>
      </div>
      <div className="responsive-box11">
      <div class="image4">
          <img src="https://i.pinimg.com/736x/c1/ca/2e/c1ca2e3ea8cd0009d65859d575e9dd11.jpg" alt="image5" />
        </div>
        <div className="content4">
          <p> At the very start of the battle,Eren is dismembered and eaten by a Titan.when he is in his final moments, he realises that he can actually become a Titan himself by shedding his own blood in a moment of rage. Eren takes the chance to use his Titan powers to kill other Titans and help the other cadets to fight against them, before turning back into his human form.104th Training Division members discover that Annie Leonhart, a young cadet of the team, can also turn into Titan and ended up trying to attack people using her power.</p>
        </div>
        
      </div>

      <AudioPlayer/>
      <div className='feedback'><h3><b>REALLY LIKED THE SEASON??</b></h3><LikeDislikeButton/></div>
      <button className='nextbut' onClick={handleNextPage}>Next</button>
    </>
  );
};

export default ExampleCss;
