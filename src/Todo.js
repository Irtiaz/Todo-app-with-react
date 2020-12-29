import React from "react";

export default class Todo extends React.Component {
  handleCheck = () => {
    this.props.handleCheck(this.props.number);
  };

  handleDelete = () => {
    this.props.handleDelete(this.props.number);
  };

  render() {
    return (
      <div>
        {this.props.number}.{" "}
        {this.props.checked ? (
          <strike>{this.props.text}</strike>
        ) : (
          <span>{this.props.text}</span>
        )}{" "}
        &nbsp;
        <button onClick={this.handleCheck}>
          {this.props.checked ? "Uncheck" : "Check"}
        </button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
