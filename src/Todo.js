import React, { Component } from "react";

import "./Todo.css";
import TodoField from "./TodoField.js";
import TodoList from "./TodoList.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  addTodo = todo => {
    const updatedTodos = this.state.todos.slice();
    updatedTodos.push({ key: Date.now(), todo: todo });
    this.setState({ todos: updatedTodos });
  };

  deleteTodo = todo => {
    const updatedTodos = this.state.todos.slice();
    const index = updatedTodos.findIndex(item => {
      return item.key === todo.key;
    });
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="Todo">
        <header className="Todo-header">
          <TodoField addTodo={this.addTodo} />
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </header>
      </div>
    );
  }
}

export default App;
