import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//components
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import FormTasks from './components/FormTasks'
import Posts from './components/Posts'

class App extends Component {
  
  state = {
    tasks: tasks
  } 

  addTask = (title, description) => {

    const newTask = {
      id: this.state.tasks.length,
      title: title,
      description: description,
      done: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    });
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(taskItem => {
      if(taskItem.id === id){
        taskItem.done = !taskItem.done;
      }
      return taskItem;
    });
    
    this.setState({
      tasks: newTasks
    })
  }


  render() {
    
    return (
      <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={ () => {
          return (
            <div>
              <FormTasks addTask={this.addTask}/>
              <Tasks 
                tasks={this.state.tasks} 
                deleteTask={this.deleteTask} 
                checkDone={this.checkDone}
              />             
            </div>
          )
        }}>
        </Route>
        <Route path="/posts" render={ () => {
          return <Posts></Posts>}}></Route>
      </Router>      
    )          
  }
}

export default App;
