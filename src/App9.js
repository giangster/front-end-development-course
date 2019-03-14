import React, { Component } from "react";
import "./App.css";
import "react-table/react-table.css";
import TodoTable from "./components/TodoTable";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      date: "",
      description: ""
    };
  }

  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  dateChanged = event => {
    this.setState({ date: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    let newDate = new Date(this.state.date);
    const strDate =
      newDate.getDate() +
      "." +
      (newDate.getMonth() + 1) +
      "." +
      newDate.getFullYear();

    let newTodo = {
      description: this.state.description,
      date: strDate
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  deleteItem = event => {
    const newTodo = this.state.todos.filter(
      (todo, index) => index !== parseInt(event.target.id)
    );

    this.setState({ todos: newTodo });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>

        <div>
          <form onSubmit={this.addTodo}>
            Description:
            <br />
            <TextField
              name="description"
              placeholder="Description"
              onChange={this.inputChanged}
              value={this.state.description}
            />
            <br />
            Date:
            <br />
            <TextField
              name="date"
              placeholder="Duedate"
              type="date"
              onChange={this.dateChanged}
              value={this.state.date}
            />
            <br />
            <br />
            <Button onClick={this.addTodo} variant="contained" color="primary">
              Add
            </Button>
          </form>
        </div>
        <div>
          <TodoTable todos={this.state.todos} onSubmit={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;
