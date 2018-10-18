import React, { Component } from "react";
import PropTypes from "prop-types";

import "./TodoList.css";

export default class TodoList extends Component {
  renderTodo = todoItem => {
    return (
      <li key={todoItem.key} className="ListItem">
        <input type="checkbox" className="Checkbox" unchecked />
        <span className="Strike">{todoItem.todo}</span>
        <button
          className="Close"
          onClick={() => this.props.deleteTodo(todoItem)}
        >
          X
        </button>
      </li>
    );
  };

  render() {
    return (
      <div>
        <text>List of todos</text>
        <ul className="List">
          {this.props.todos.map(todo => this.renderTodo(todo))}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func.isRequired
};
