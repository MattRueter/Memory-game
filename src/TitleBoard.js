import './TitleBoard.css';
import React from 'react';   



function TitleBoard() {
  return (
    <div>
      <div className='titleBar'>
        <h1>Memory Game</h1>
        <p>Click on each card. Avoid clicking on the same card more than once in a round.</p>
        <div className='currentScore'>Current Score:</div>
        <div className='bestScore'>Best Score:</div>
      </div>

    </div>
  );
}


export default TitleBoard;