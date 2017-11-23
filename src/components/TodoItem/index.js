import React, {Component} from 'react';

export default class TodoItem extends Component {

	deleteTodo(id) {
		this.props.deleteTodo(id);
	}

	onCheck(id) {
		this.props.checkTodo(id);
	}

	render() {
		let {
			id,
			title,
			done
		} = this.props.todo;
		return (
			<div className='col s12 card-panel'>
				<div className="left">
					<input
						id={id}
						type="checkbox"
						checked={done}
						onChange={() => this.onCheck(id)}
					/>
					<label htmlFor={id}> </label>
				</div>
				<h4 className="left">{title}</h4>
				< button
					className='right btn-floating waves-effect'
					disabled={done}
					onClick={() => this.deleteTodo(id)}>
					<i className="material-icons">delete</i>
				</button>
			</div>
		);
	}
}