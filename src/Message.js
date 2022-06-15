import React from 'react';
import './Message.css';

class Message extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className={this.props.class}>
				<h1>{this.props.message}</h1>
				<button onClick={this.props.click}>{this.props.btnMessage}</button>
			</div>
		)
	}
}

export default Message;
