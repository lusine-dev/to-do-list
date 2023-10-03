import React, {Component} from 'react';

export default class AddTodo extends Component {

    constructor (props){
        super(props);

        this.state = {
            text : '',
        }
    }
    handleChange = (ev) => {
        // console.log(ev.target.value);
        this.setState({
          [ev.target.name] : ev.target.value,
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.handleSubmit(this.state.text);
        this.setState({text : ''})
      }

    render () {
        return (
            <form className='AddTodo_form' onSubmit={this.handleSubmit}>
                <input  name='text' 
                        placeholder='enter todo'
                        onChange={this.handleChange}
                        value={this.state.text}
                />
                <button onClick={this.handleSubmit}>
                    Add
                </button>
            </form>
        )
    }
}

