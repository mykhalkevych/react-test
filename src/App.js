import React from 'react';
import Header from './components/Header.js'
import TodoInput from './components/TodoInput.js'

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: [
				{
					title: "Todo task",
					done: true
				}
			]
		}
	}

	deleteAll() {
		this.setState({
			todoList: []
		})
	}
	addTodo(todo) {
		this.setState({
			todoList: this.state.todoList.unshift(todo)
		})
	}

	render() {
		return (
			<div className='mui-container'>
				<div className='mui-row'>
					<Header/>
					<TodoInput sendData={this.getUserData.bind(this)}/>
				</div>
			</div>
		);
	}
}