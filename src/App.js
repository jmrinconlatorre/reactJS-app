import React, { Component } from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import FormTasks from './components/FormTasks'

class App extends Component {
  
  state = {
    tasks: tasks
  } 

  addTask = (title, description) => {

    const newTask = {
      id: this.state.tasks.length,
      title: title,
      description: description
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    });

  }

  render() {
    
    return (
      <div>
        <FormTasks addTask={this.addTask}/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );          
  }
}

export default App;
