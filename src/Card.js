import React from 'react';
import './Card.css';
import TitleBoard from './TitleBoard';


const imageLibrary = ['one.png', 'two.png', 'three.png','four.png'];
//const imageLibrary = ['image A', 'imgage B', 'image C', 'image D', 'image E', 'image F', 'image G', 'image H'];
let imagesDisplayedRandomly=[];
let count=[];
let stop = false;

function displayCardsRandomly(){
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
		if(this.state.clickedImages.includes(image)){
			this.setState({currentScore:0}) 
		}else{

			this.setState((state) =>{
				return {currentScore: state.currentScore+1}
			}); 
		}
		reset();
		displayCardsRandomly();
		this.setState({clicked:true});
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