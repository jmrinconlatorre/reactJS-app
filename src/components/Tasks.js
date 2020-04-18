import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {

    render() {
        return this.props.tasks.map(taskItem => 
            <Task 
                task = {taskItem} 
                key = {taskItem.id}
                deleteTask = {this.props.deleteTask}
                checkDone = {this.props.checkDone}
            />);       
    }
}

export default Tasks;
