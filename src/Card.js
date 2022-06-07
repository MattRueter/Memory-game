import React from 'react';
import './Card.css';
import TitleBoard from './TitleBoard';

const imageLibrary = ['image A', 'imgage B', 'image C', 'image D'];
const images = imageLibrary.map((image) =>
	<div className='card'>{image}</div>
);

class Card extends React.Component{
	constructor(props){
		super(props);
		this.state ={ currentScore:0, bestScore:0, clickedImages:[] };
	}
	render(){
		return(
			<div>
				<TitleBoard currentScore={this.state.currentScore} bestScore={this.state.bestScore} />
					<div className='cardContainer'>{images}</div>	
			</div>
		)
	}
}
export default Card;