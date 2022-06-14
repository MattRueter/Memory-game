import React from 'react';
import './WinDisplay.css';
//winMessageContainer
class WinDisplay extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className={this.props.class}>
				<h1>Well done!</h1>
				<button onClick={this.props.click}>new game</button>
			</div>
		)
	}
}

export default WinDisplay;