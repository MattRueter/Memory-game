import './TitleBoard.css';
import React from 'react';   

let currentScore = 9;
let bestScore = 8; 

class TitleBoard extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='titleBar'>
        <h1>Memory Game</h1>
        <p>Click on each card. Avoid clicking on the same card more than once in a round.</p>
        <div className='score'>Current Score:{currentScore}</div>
        <div className='score'>Best Score:{bestScore}</div>
      </div>
    )
  }
}

export default TitleBoard;

//**********************************************************
//  Same as function 
//********************************************************** 
/*
function TitleBoard() {
  return (
    <div>
      <div className='titleBar'>
        <h1>Memory Game</h1>
        <p>Click on each card. Avoid clicking on the same card more than once in a round.</p>
        <div className='score'>Current Score:{currentScore}</div>
        <div className='score'>Best Score:{bestScore}</div>
      </div>

    </div>
  );
}
*/