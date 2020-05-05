import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {entry: ''}
    }

    inputChange = e =>{
        this.setState({
            entry: e.target.value
        }) 
    }

    submitTask = e =>{
        e.preventDefault()
        this.props.addTask(this.state.entry)
        this.setState({
            entry:''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitTask}>
                    <input
                        name='task'
                        type='text'
                        onChange={this.inputChange}
                        value={this.state.entry}
                    />
                    <br />
                    <input
                        name='add'
                        type='submit'
                        value='Add To List'
                    />
                    <br />
                </form>
             <button onClick={this.props.clearCompleted}>
                Clear Completed
            </button>
         </div>
        )
    }
}

export default TodoForm