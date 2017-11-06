import React from 'react';
import Header from './components/Header.js'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<h2>Content</h2>
				<p>The content text!!!</p>
			</div>
		);
	}
}