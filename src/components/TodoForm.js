import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <form>
                <input
                    name='task'
                    type='text'
                />
                <br />
                <input
                    name='add'
                    type='submit'
                    value='Add To List'
                />
                <br />
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm