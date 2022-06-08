import React from 'react';
import './Card.css';
import TitleBoard from './TitleBoard';


const imageLibrary = ['one.png', 'two.png', 'three.png','four.png'];
let imagesDisplayedRandomly=[];


function displayCardsRandomly(){
	imagesDisplayedRandomly=[];
	let count=[];
	let stop = false;

	while(stop===false){
		const randomNumber=Math.floor(Math.random()*(imageLibrary.length));
		if(imagesDisplayedRandomly.length===imageLibrary.length){
		  stop =true;
		}else if(randomNumber>imageLibrary.length){
		}else if(count.includes(randomNumber)){
		}else{
		  imagesDisplayedRandomly.push(imageLibrary[randomNumber]);
		  count.push(randomNumber);
		}	
	}
};


class Card extends React.Component{
	constructor(props){
		super(props);
		this.state ={ currentScore:0, bestScore:0, clickedImages:[]};
		this.handleClick=this.handleClick.bind(this);
		
	}
	
	handleClick(image){
		if(this.state.clickedImages.includes(image)){
			this.setState({currentScore:0}) 
		}else{
			this.setState((state) =>{
				return {currentScore: state.currentScore+1}
			}); 
		}
		displayCardsRandomly();
	}

	render(){
		let images;
		if(imagesDisplayedRandomly.length===0){
			images= imageLibrary.map((image) =>
			<div className='card' style={{backgroundImage:`url(${image})`}} key={image.toString()} onClick={this.handleClick.bind(this,image)}></div>
			);
		}else{
			images = imagesDisplayedRandomly.map((image) =>
			<div className='card' style={{backgroundImage:`url(${image})`}} key={image.toString()} onClick={this.handleClick.bind(this,image)}></div>
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