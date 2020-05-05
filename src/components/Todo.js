import React from 'react'
import './Todo.css'

class Todo extends React.Component {
 constructor(){
    super();
 }   
 render(){
     return(
         <ul>
             <li className={`${this.props.item.purchased ? 'purchased' :''}`}
                onClick={()=>
                    this.props.toggleComplete(this.props.item.id)}>
                 {this.props.item.task}
            </li>
        </ul>
     )
 }

}

export default Todo