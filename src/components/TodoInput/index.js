import React, {Component} from 'react';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            todoText: ''
        }
    }

    // componentWillUpdate(nextProps, nextState) {
    //
    // }

    addTodo() {
        console.log(this.state.todoText)
        this.props.addTodo(this.state.todoText);
    }

    render() {
        return (
            <div className='mui-col-sm-6'>
                <h2>Result</h2>
                <div className='mui-panel'>
                    <div className="mui-textfield mui-textfield--float-label">
                        <input
                            className="mui--is-touched mui--is-pristine mui--is-empty"
                            type="text"
                            name='name'
                            value={this.state.todoText}
                            onChange={this.onChange}/>
                        <label>Name:</label>
                    </div>
                    <button
                        className='mui-btn mui-btn--primary'
                        onClick={this.addTodo}>
                        Add
                    </button>
                </div>
            </div>
        );
    }

    onChange(e) {
        let val = e.target.value;
        this.setState({
            todoText: val
        });
    }
}