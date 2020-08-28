import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: 'lightblue',
      padding: '10px',
      borderBottom: '1px black dotted',
      textDecoration:
        this.props.todo.completed === true ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />
          {''}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propsTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: 'lightpink',
  color: '#fff',
  border: 'none',
  padding: '.4em .6em',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};
export default TodoItem;
