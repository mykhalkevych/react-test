import React, {Component} from 'react';
import TodoItem from '../TodoItem'


export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.isUserEmpty = false;
		this.clearList = this.clearList.bind(this)
		console.log(this.props)
	}

	// componentWillUpdate(nextProps, nextState) {
	//
	// }

	clearList() {
		this.props.deleteAll();
	}

	render() {
        let todoList = this.props.list;
		return (

			<div className='mui-col-sm-12'>
				<div className='mui-panel'>
					<div className="list">
						{todoList.map( todo => <TodoItem key={todo.title} todo={todo}/>)}
					</div>
					<button
						className='mui-btn mui-btn--danger'
						onClick={this.clearList}
						disabled={this.isUserEmpty}>
						Remove All
					</button>
				</div>
			</div>
		);
	}
}