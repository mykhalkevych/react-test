import React, {Component} from 'react';

export default class TodoInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoTitle: ''
		}
	}

	addTodo() {
		this.props.addTodo(this.state.todoTitle);
		this.setState({
			todoTitle: ''
		})
	}

	render() {
		let {canAdd} = this.props;
		return (
			<div className='col s6 offset-s3'>
				<div className="row">
					<div className="input-field col s12 m10">
						<input
							id="todoName"
							type="text"
							readOnly={canAdd}
							value={this.state.todoTitle}
							onChange={(e) => this.onChange(e)}
						/>
						<label htmlFor="todoName">First Name</label>
					</div>
					<div className="col s12 m2">
						<button
							className='right btn-large btn-floating waves-effect'
							disabled={canAdd}
							onClick={() => this.addTodo()}>
							<i className="material-icons">add</i>
						</button>
					</div>
				</div>
			</div>
		);
	}

	onChange(e) {
		let val = e.target.value;
		this.setState({
			todoTitle: val
		});
	}
}