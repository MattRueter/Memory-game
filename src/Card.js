import React from 'react';
import TitleBoard from './TitleBoard';

class Card extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<TitleBoard />
				<p>hello from Card.js</p>
			</div>
		)
	}
}
export default Card;