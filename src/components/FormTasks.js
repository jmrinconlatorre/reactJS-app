import React, { Component } from 'react';

class FormTasks extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = ev => {
        ev.preventDefault();
    }

    onChange = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Name of task" onChange={this.onChange} value={this.state.title} />
                <br/>
                <br/>
                <textarea type="text" name="description" placeholder="Description" onChange={this.onChange} value={this.state.description} />
                <input type="submit" value="Send"/>
            </form>
        );
    }
}

export default FormTasks;