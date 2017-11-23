import React from 'react';
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default class App extends React.Component {
	constructor() {
		super();
		this.canRemoveAll = false;
		this.state = {
			todoList: [
				{
					id: 1,
					title: "Todo 1",
					done: true,
				},
				{
					id: 2,
					title: "Todo 2",
					done: false
				}
			]
		};
	}
	componentWillMount() {
		let removeList = this.state.todoList.filter(todo => {
			return !todo.done;
		});
		this.canRemoveAll = removeList.length > 0;
	}

	componentWillUpdate(nextProps, nextState) {
		let removeList = nextState.todoList.filter(todo => {
			return !todo.done;
		});
		this.canRemoveAll = removeList.length > 0;
	}

	deleteAll() {
		let list = this.state.todoList;
		list = list.filter(todo => {
			return todo.done;
		});
		this.setState({
			todoList: list
		})
	}

	addTodo(titleTodo) {
		let list = this.state.todoList;
		list.unshift({
			id: Math.floor(Math.random() * 100000),
			title: titleTodo,
			done: false
		});
		this.setState({
			todoList: list
		})
	}
	doneTodo(id) {
		let list = this.state.todoList;
		list = list.map( todo => {
			if (todo.id === id) {
				todo.done = !todo.done;
			}
			return todo
		});

		this.setState({
			todoList: list
		})
	}
	deleteTodo(id) {
		let list = this.state.todoList;
		list = list.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todoList: list
		})
	}
	render() {
		let canAdd = this.state.todoList.length > 4;
		return (
			<div className='container'>
				<div className='row'>
					<Header/>
					<TodoInput
						addTodo={(title) => this.addTodo(title)}
						canAdd={canAdd}
					/>
					<TodoList
						list={this.state.todoList}
						checkTodo={(id) => this.doneTodo(id)}
						deleteTodo={(id) => this.deleteTodo(id)}
						deleteAll={() => this.deleteAll()}
						canRemoveAll={this.canRemoveAll}
					/>
				</div>
			</div>
		);
	}
}