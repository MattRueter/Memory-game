import React, {Component} from 'react';   


class Message extends React.Component {
	constructor(props){
		super(props);
	}
	render () {
		return (

			<div>
				<p> {this.props.text} {this.props.name} !</p>
			</div>
		);
	}
}

export default Message;