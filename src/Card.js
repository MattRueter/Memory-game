import React from 'react';
import TitleBoard from './TitleBoard';

//let currentScore = 3;
//let bestScore = 6; 

class Card extends React.Component{
	constructor(props){
		super(props);
		this.state ={ currentScore:0, bestScore:0};
	}
	render(){
		return(
			<div>
				<TitleBoard currentScore={this.state.currentScore} bestScore={this.state.bestScore} />
				<p>hello from Card</p>
			</div>
		)
	}
}
export default Card;