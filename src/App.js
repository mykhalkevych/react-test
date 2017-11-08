import React from 'react';
import Header from './components/Header.js'
import UserForm from './components/UserForm.js'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<UserForm/>
			</div>
		);
	}
}