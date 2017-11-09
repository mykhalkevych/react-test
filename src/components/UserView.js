import React, {Component} from 'react';

export default class UserView extends Component {
	constructor(props) {
		super(props);
		this.isUserEmpty = true;
		this.clearData = this.clearData.bind(this)
	}

	componentWillUpdate(nextProps, nextState) {
		this.isUserEmpty = !this.isUserEmpty
	}

	clearData() {
		this.props.clearData();
	}

	render() {
		return (
			<div>
				{JSON.stringify(this.props.user)}
				<button onClick={this.clearData}
								disabled={this.isUserEmpty ? true : false}>
					Clear
				</button>
			</div>
		);
	}
}