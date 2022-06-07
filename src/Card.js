import React from 'react';
import './Card.css';
import TitleBoard from './TitleBoard';


class Card extends React.Component{
	constructor(props){
		super(props);
		this.state ={ currentScore:0, bestScore:0, clickedImages:[] };
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(image){
		console.log('clicked '+image)
	}

	render(){
		const imageLibrary = ['image A', 'imgage B', 'image C', 'image D', 'image E', 'image F', 'image G', 'image H'];
		const images= imageLibrary.map((image) =>
		<div className='card' key={image.toString()} onClick={this.handleClick.bind(this,image)}>{image}</div>
		);

		return(
			<div>
				<TitleBoard currentScore={this.state.currentScore} bestScore={this.state.bestScore} />
					<div className='cardContainer'>{images}</div>	
			</div>
		)
	}
}
export default Card;