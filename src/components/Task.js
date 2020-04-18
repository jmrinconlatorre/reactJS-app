import React, { Component } from 'react';


class Task extends Component {
    
    StyleCompleted() {
        return {
            fontSize:'20px',
            color: this.props.task.done ? 'grey' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {        
        const { task } = this.props;

        return(
            <p style={this.StyleCompleted()}>
                { task.id } - { task.title } - { task.description } - { task.done }
                <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)}/>
                <button style={btnDelete} onClick={this.props.deleteTask.bind(this,task.id)}>
                    x
                </button>
            </p>
        );
    }
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
}

export default Task;