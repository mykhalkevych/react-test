import React from 'react';
import Header from './components/Header.js'
import UserForm from './components/UserForm.js'
import UserView from './components/UserView.js'

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {}
		}
	}

	getUserData(data) {
		console.log('getUserData', data)
		this.setState({
			user: data
		})
	}

	clearData() {
		this.setState({
			user: ''
		})
	}

	render() {
		return (
			<div className='mui-container'>
				<div className='mui-row'>
					<Header/>
					<UserForm sendData={this.getUserData.bind(this)}/>
					<UserView clearData={this.clearData.bind(this)}
										user={this.state.user}/>
				</div>
			</div>
		);
	}
}