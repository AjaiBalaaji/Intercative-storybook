import React from "react";
import './Page1.css';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Page2 from './Page2';

// const ResponsiveBox = styled.div`
//   width: 80%;
//   max-width: 600px;
//   margin: auto;
//   background-color: #f0f0f0;
//   display: flex;

//   @media (max-width: 600px) {
//     flex-direction: column;
//     width: 90%;
//   }
// `;
const QuestionContainer = styled.div`
    text-align: center;
    margin-top: 20px;

    h2 {
      margin-bottom: 10px;
    }

    .options {
      display: flex;
      justify-content: space-around;
    }

    .option-button {
      padding: 10px;
      background-color: black;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      margin-left:5px;
      margin-right:5px;
    }
  `;
const Navbar = () => {
  const BounceAnimation = keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  `;

  const Bounce = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    animation: 2s ${BounceAnimation} infinite;
  `;

  return (
    <>
      <nav className="navbar">
        <img src="https://i.pinimg.com/564x/f2/bd/e5/f2bde565af7b1719c5e506c000e3b0c1.jpg" alt="Logo" className="logo" />
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Kids Stories</Link>
        </div>
      </nav>

      <div className="image-container">
        
          <img src="https://i.pinimg.com/564x/a6/c5/de/a6c5de929b42de38ce677cc399b7eccc.jpg" alt="Image1" className="image" />
        <img src="https://i.pinimg.com/564x/bb/94/59/bb9459b5d010848aac14c230f347d818.jpg" alt="Image2" className="image" />
        <img src="https://i.pinimg.com/564x/f7/6a/bb/f76abb62c45b33e0a6b26d2d013168f4.jpg" alt="Image3" className="image" />
      </div>

      <div className="body1">
        <div className="heading1">
          <Bounce><h1>FREE STORIES FOR KIDS</h1></Bounce>
        </div>
      </div>
      <QuestionContainer>
        <h2>Which story you want to read?</h2>
        <div className="options">
          <div>
            <Link to={"/Page2"}>
              <button className="option-button">Attack on Titan</button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button className="option-button">Jujutsu kaizen</button>
            </Link>
          </div>
          <div>
            <Link to="/Page4">
              <button className="option-button">MIckey Mouse</button>
            </Link>
          </div>
        </div>
      </QuestionContainer>
    </>
  );
};

export default Navbar;
