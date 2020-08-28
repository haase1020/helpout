import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';

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
        completed: false,
      },
      {
        id: 3,
        title: 'Clean the bathrooms',
        completed: false,
      },
    ],
  };

  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className='App'>
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
