import React, {Component} from 'react';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
        console.log(this.props)
    }

    // componentWillUpdate(nextProps, nextState) {
    //
    // }

    deleteTodo() {
        console.log(deleteTodo);
    }

    render() {
        let{title, done} = this.props.todo;
        return (
                <div className='mui-panel'>

                    <h3>{title}</h3>
                    <div class="mui-checkbox ">
                        <label>
                            <input type="checkbox" checked={done}/>
                        </label>
                    </div>
                    <button
                        className='mui-btn mui-btn--danger'
                        onClick={this.deleteTodo} >
                        Remove
                    </button>
            </div>
        );
    }
}