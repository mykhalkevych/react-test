import React from 'react';
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: [
				{
					title: "Todo 1",
					done: true
				},
                {
                    title: "Todo 2",
                    done: false
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
		let list  = this.state.todoList;
		list.unshift({
            title: todo,
            done: false
		});
		this.setState({
			todoList: list
		})
	}

	render() {
		return (
			<div className='mui-container'>
				<div className='mui-row'>
					<Header/>
					<TodoInput addTodo={this.addTodo.bind(this)}/>
					<TodoList list={this.state.todoList}/>
				</div>
			</div>
		);
	}
}