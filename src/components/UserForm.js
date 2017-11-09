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
			<div className='mui-col-sm-6'>
				<h2>Awesome Form</h2>
				<form
					className='mui-panel'
					onSubmit={this.saveData}>
					<div className="mui-textfield mui-textfield--float-label">
						<input
							className="mui--is-touched mui--is-pristine mui--is-empty"
							type="text"
							name='name'
							value={this.state.name}
							onChange={this.onChange}/>
						<label>Name:</label>
					</div>
					<div className="mui-textfield mui-textfield--float-label">
						<input
							className="mui--is-touched mui--is-pristine mui--is-empty"
							type="text"
							name='surName'
							value={this.state.surName}
							onChange={this.onChange}/>
						<label>SurName:</label>
					</div>
					<div className="mui-textfield mui-textfield--float-label ">
						<textarea
							required=""
							className="mui--is-touched mui--is-pristine mui--is-empty"
							rows="4"
							name='about'
							value={this.state.about}
							onChange={this.onChange}>
						</textarea>
						<label>About Me:</label>
					</div>
					<button
						className='mui-btn mui-btn--primary'
						type='submit'
						disabled={this.isFormValid ? false : true}>
						Save
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
		let user = {
			name: this.state.name,
			surName: this.state.surName,
			about: this.state.about
		}
		console.log(this.props)
		this.props.sendData(user)
		this.resetForm();
		console.log('Save data')
	}

}