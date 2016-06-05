import React from 'react';

export default class Todo extends React.Component{
	render(){
		console.log(this.props);
		const { text }  =  this.props;
		return(
			<div>
				<h3>{ text }</h3>
			</div>
		);
	}
}