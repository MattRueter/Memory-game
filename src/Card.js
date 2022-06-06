import React from 'react';
import TitleBoard from './TitleBoard';

let currentScore = 3;
let bestScore = 6; 

class Card extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<TitleBoard currentScore={currentScore} bestScore={bestScore} />
				<p>hello from Card</p>
			</div>
		)
	}
}
export default Card;