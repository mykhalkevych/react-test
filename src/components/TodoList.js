import React, {Component} from 'react';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.isUserEmpty = true;
		this.clearData = this.clearData.bind(this)
	}

	componentWillUpdate(nextProps, nextState) {
		this.isUserEmpty = !!nextProps.user ? false : true
	}

	clearData() {
		this.props.clearData();
	}

	render() {
		return (
			<div className='mui-col-sm-6'>
				<h2>Result</h2>
				<div className='mui-panel'>
					<pre hidden={this.isUserEmpty}>
						{JSON.stringify(this.props.user, undefined, 2)}
					</pre>
					<button
						className='mui-btn mui-btn--danger'
						onClick={this.clearData}
						disabled={this.isUserEmpty ? true : false}>
						Clear
					</button>
				</div>
			</div>
		);
	}
}