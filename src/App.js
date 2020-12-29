import React from "react";
import Todo from "./Todo";
import "./App.css";

export default class App extends React.Component {
  state = {
    todos: [],
  };

  inputRef = React.createRef();

  handleCheck = (number) => {
    const todos = this.state.todos;
    todos[number - 1].checked = !todos[number - 1].checked;
    this.setState(todos);
  };

  handleDelete = (number) => {
    const todos = this.state.todos;
    todos.splice(number - 1, 1);
    this.setState(todos);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const todos = this.state.todos;

    todos.push({
      checked: false,
      text: this.inputRef.current.value,
    });

    this.setState(todos);

    this.inputRef.current.value = "";
  };

  handleCheckEverything = (check) => {
    for (let todo of this.state.todos) {
      todo.checked = check;
    }
    this.setState({ todos: this.state.todos });
  };

  handleDeleteChecked = () => {
    const todos = this.state.todos;
    for (let i = todos.length - 1; i >= 0; --i) {
      if (todos[i].checked) todos.splice(i, 1);
    }
    this.setState(todos);
  };

  handleDeleteEverything = () => {
    this.setState({ todos: [] });
  };

  render() {
    return (
      <div className="App">
        <div>Todo App</div>

        <form>
          <input
            placeholder="Enter Todo Here"
            ref={this.inputRef}
            spellCheck={"false"}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Enter
          </button>
        </form>

        <br />

        {this.state.todos.map((todo, i) => (
          <Todo
            number={i + 1}
            text={todo.text}
            checked={todo.checked}
            key={i}
            handleCheck={this.handleCheck}
            handleDelete={this.handleDelete}
          />
        ))}

        <br />

        {this.state.todos.length > 0 ? (
          <div>
            <button onClick={() => this.handleCheckEverything(true)}>
              Check Everything
            </button>
            <button onClick={() => this.handleCheckEverything(false)}>
              Uncheck Everything
            </button>
            <br />

            <button onClick={this.handleDeleteChecked}>Delete Checked</button>
            <button onClick={this.handleDeleteEverything}>
              Delete Everything
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
