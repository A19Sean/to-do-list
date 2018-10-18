import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ""
    };
  }

  submitTodo = todo => {
    todo.preventDefault();
    if (this.state.todo !== "") this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          name="to-do"
          placeholder="Add To-Do..."
          onChange={input => this.setState({ todo: input.target.value })}
          value={this.state.todo}
        />
        <button type="submit">+</button>
      </form>
    );
  }
}

TodoField.propTypes = {
  addTodo: PropTypes.func.isRequired
};
