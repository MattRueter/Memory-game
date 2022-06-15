import React from 'react';
import './Message.css';
//winMessageContainer
class Message extends React.Component{
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

export default Message;