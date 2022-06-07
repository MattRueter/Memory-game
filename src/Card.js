import React from 'react';
import './Card.css';
import TitleBoard from './TitleBoard';

const imageLibrary = ['image A', 'imgage B', 'image C', 'image D', 'image E', 'image F', 'image G', 'image H'];
let imagesDisplayedRandomly=[];
let count=[];
let stop = false;

function displayCardsRandomly(){
	while(stop===false){
		const randomNumber=Math.floor(Math.random()*(imageLibrary.length));
		if(imagesDisplayedRandomly.length===imageLibrary.length){
		  stop =true;
		  	console.log('stop.');
		}else if(randomNumber>imageLibrary.length){
			console.log('error. # too big.');
		}else if(count.includes(randomNumber)){
			console.log('# taken.');
		}else{
		  imagesDisplayedRandomly.push(imageLibrary[randomNumber]);
		  count.push(randomNumber);
		}	
	}
};

function reset(){
	imagesDisplayedRandomly=[];
	count=[];
	stop = false;
  }


class Card extends React.Component{
	constructor(props){
		super(props);
		this.state ={ currentScore:0, bestScore:0, clickedImages:[], clicked:false};
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(image){
		//console.log('clicked '+image)
		//console.log(clickedImages.includes(image));
		reset();
		displayCardsRandomly();
		this.setState({clicked:true});
	}

	
	render(){
		let images;
		if(imagesDisplayedRandomly.length===0){
			images= imageLibrary.map((image) =>
			<div className='card' key={image.toString()} onClick={this.handleClick.bind(this,image)}>{image}</div>
			);
		}else{
			images = imagesDisplayedRandomly.map((image) =>
			<div className='card' key={image.toString()} onClick={this.handleClick.bind(this,image)}>{image}</div>
			);
		}

		return(
			<div>
				<TitleBoard currentScore={this.state.currentScore} bestScore={this.state.bestScore} />
					<div className='cardContainer'>{images}</div>	
			</div>
		)
	}
}
export default Card;