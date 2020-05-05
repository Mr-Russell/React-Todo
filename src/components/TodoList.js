import React from 'react'
import Todo from './Todo.js'

class TodoList extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                {
                    this.props.tasks.map(item =>(
                        <Todo 
                            item={item} 
                            toggleComplete={this.props.toggleComplete}
                        />
                    ))
                }
            </div>
        )
    }
}

export default TodoList