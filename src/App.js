import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Clean the kitchen',
        completed: false,
      },
      {
        id: 2,
        title: 'Take out the garbage',
        completed: true,
      },
      {
        id: 3,
        title: 'Clean the bathrooms',
        completed: false,
      },
    ],
  };
  render() {
    console.log(this.state.todos);
    return (
      <div className='App'>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
