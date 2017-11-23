import React, {Component} from 'react';
import TodoItem from '../TodoItem'


export default class TodoList extends Component {

	clearList() {
		this.props.deleteAll();
	}

	deleteTodo(id) {
		this.props.deleteTodo(id)
	}

	checkTodo(id) {
		console.log(id)
		this.props.checkTodo(id);
	}

	render() {
		let {
			list: todoList,
			canRemoveAll
		} = this.props;
		let hasItems = todoList.length;
		return (
			<div className='col s6 offset-s3' hidden={!hasItems}>
				<div className="list">
					{todoList.map(todo => (
							<TodoItem
								key={todo.id}
								todo={todo}
								deleteTodo={(id) => this.deleteTodo(id)}
								checkTodo={(id) => this.checkTodo(id)}
							/>
						)
					)}
				</div>
				<button
					className='btn'
					onClick={() => this.clearList()}
					disabled={!canRemoveAll}>
					Remove All
				</button>
			</div>
		);
	}
}