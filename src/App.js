import React from 'react';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'


const tasks = [
  {
    task: 'Laundry',
    id: 1,
    completed: false
  },
  {
    task: 'Wash Dishes',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {tasks: tasks}
  }

  // design `App` to be the parent component of your application.
  addTask = taskName =>{
    const newTask ={
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
     tasks: [...this.state.tasks, newTask]
    })
  }

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>

        <TodoList tasks={this.state.tasks}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
