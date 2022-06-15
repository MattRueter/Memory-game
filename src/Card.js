import React from 'react';
import './Card.css';
import TitleBoard from './TitleBoard';
import Message from './Message';

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
		this.state ={ currentScore:0, bestScore:0, clickedImages:[''], class:'messageContainer'};
		this.handleClick=this.handleClick.bind(this);
		this.reset=this.reset.bind(this);
	}
	
	handleClick(image){
		if(this.state.clickedImages.includes(image)){
			this.setState({ currentScore:0, clickedImages:[''] });
		}else{
			this.setState((state)=>{
				return{currentScore: state.currentScore+1, clickedImages:state.clickedImages+image+','}
			})
		}
		//displayCardsRandomly();
	}

	reset(){
			this.setState({currentScore:0, bestScore:0, clickedImages:[''], class:'messageContainer'});
	}

	componentDidUpdate(){
		if(this.state.currentScore>this.state.bestScore){
			this.setState((state)=>{
				return {bestScore:state.bestScore+1}
			});
		}else if(this.state.currentScore===imageLibrary.length){
			console.log('you win.'); //wonDisplay component toggles to 'show.'
			this.setState({class:'messageContainerShow', currentScore:0});
		}
	}

	componentWillUnmount(){

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
				<div className='cardContainer'>{images}<Message class={this.state.class} click={this.reset} /></div>	
			</div>
		)
	}
}
export default Card;