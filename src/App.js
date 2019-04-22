import React, { Component } from 'react';
import { connect } from 'react-redux'


class App extends Component {
  addTask() {
    console.log("testing adding task?")
    
    this.props.onAddTask(this.taskInput.value);
    this.taskInput.value = '';
  }
  deleteTask(id){
    const tasks = this.state.tasks.filter(tasks => {
      return tasks.id !== id
    });
    // this.props.onDeleteTask(this.taskInput.value);
    this.setState({
      tasks
    });
  }


  render() {
    // console.log(this.props.testStore);
    return (
       <div>
          <input type="text" ref={(input) => { this.taskInput = input; }} />
          <button onClick={this.addTask.bind(this)}>Add task</button>
          <button onClick={this.deleteTask.bind(this)}>Delete</button>
              <ul>
              {this.props.tasks.map((task, index) =>
              <li key={index}>{task}</li>
              )}
              </ul>
        </div>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasks
  }),
  dispatch => ({
    onAddTask: (taskName) => {
      dispatch({ type: 'ADD_TASK', payload: taskName })
    },
    // onDeleteTask: (taskId) =>{
    //   dispatch({type: 'DELETE_TASK', payload: taskId})
    // }
  })
)(App);

