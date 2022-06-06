import React from 'react';
import './Card.css';
import TitleBoard from './TitleBoard';


class Card extends React.Component{
	constructor(props){
		super(props);
		this.state ={ currentScore:0, bestScore:0 };
	}
	render(){
		return(
			<div>
				<TitleBoard currentScore={this.state.currentScore} bestScore={this.state.bestScore} />
				<div className='cardContainer'>
					<div className='card'>Image here.</div>	
				</div>
			</div>
		)
	}
}
export default Card;