import React from 'react';
import './Card.css';
import TitleBoard from './TitleBoard';


const imageLibrary = ['one.png', 'two.png', 'three.png','four.png', 'five.png','six.png','seven.png','eight.png','nine.png','ten.png','eleven.png','twelve.png',];
let imagesDisplayedRandomly = [];
displayCardsRandomly(); 

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
	return imagesDisplayedRandomly;
};


class Card extends React.Component{
	constructor(props){
		super(props);
		this.state ={ currentScore:0, bestScore:0, clickedImages:[''], clicked: false};
		this.handleClick=this.handleClick.bind(this);
	}
	
	handleClick(image){
		if(this.state.clickedImages.includes(image)){
			console.log('back to zero!');
			this.setState({ currentScore:0, clickedImages:[''] });
	
		}else{
			console.log('add a point /push this to array/has the bestScore changed?');
			this.setState((state)=>{
				return{currentScore: state.currentScore+1, clickedImages:state.clickedImages+image+','}
			})
		}
		displayCardsRandomly();
	}

	render(){
		let images = imagesDisplayedRandomly.map((image) =>
			<div 
				className = 'card' 
				style = {{backgroundImage:`url(${image})`}} 
				key = {image.toString()} 
				onClick = {this.handleClick.bind(this,image)}>
			</div>
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