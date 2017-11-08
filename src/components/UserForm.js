import React, {Component} from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.isFormValid = false;
		this.saveData = this.saveData.bind(this);
		this.onChange = this.onChange.bind(this);
		this.validator = this.validator.bind(this);
		this.state = {
			name: '',
			surName: '',
			about: ''
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.saveData}>
					<p>
						<label>Name:</label><br/>
						<input type="text" name='name' value={this.state.name}
									 onChange={this.onChange}/>
					</p>
					<p>
						<label>SurName:</label><br/>
						<input type="text" name='surName' value={this.state.surName}
									 onChange={this.onChange}/>
					</p>
					<p>
						<label>About Me:</label><br/>
						<textarea name='about' value={this.state.about}
											onChange={this.onChange}></textarea>
					</p>
					<button type='submit'
									disabled={this.isFormValid ? false : true}>Save
					</button>
				</form>
			</div>
		);
	}

	componentWillUpdate(nextProps, nextState) {
		this.isFormValid = this.validator(nextState)
	}

	onChange(e) {
		let val = e.target.value;
		let name = e.target.name;
		this.setState({
			[name]: val,
		});
	}

	validator(state) {
		return !!state.name && !!state.surName && !!state.about
	}

	resetForm() {
		this.setState({
			name: '',
			surName: '',
			about: ''
		});
	}

	saveData(e) {
		e.preventDefault();
		this.resetForm();
		console.log('Save data')
	}

}