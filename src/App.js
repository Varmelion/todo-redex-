import React, { Component } from 'react'
import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'

class App extends Component {
  render() {
    return (
      <div >
              <CreateTodo />
            <Table />
      </div>
    );
  }
}

export default App;