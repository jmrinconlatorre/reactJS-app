import React, { Component } from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import FormTasks from './components/FormTasks'

class App extends Component {
  
  state = {
    tasks: tasks
  } 

  render() {
    
    return (
      <div>
        <FormTasks/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );          
  }
}

export default App;
