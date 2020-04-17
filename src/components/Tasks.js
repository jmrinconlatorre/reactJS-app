import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {

    render() {

        return this.props.tasks.map(taskItem => <Task task = { taskItem } key = { taskItem.id }/>);
        
    }
}

export default Tasks;
