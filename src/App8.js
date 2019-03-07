import React, { Component } from "react";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      date: "",
      id: 0,
      description: ""
    };
  }

  dateChanged = event => {
    this.setState({
      date: event.target.value
    });
  };

  inputChanged = event => {
    this.setState({
      description: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();

    let task = {
      date: this.state.date,
      description: this.state.description,
      id: this.state.id
    };

    this.setState({
      todos: [...this.state.todos, task]
    });

    this.setState({
      id: this.state.id + 1
    });
  };

  deleteItem = event => {
    const newTodo = this.state.todos.filter((todo, index) => index !== parseInt(event.target.id));

    this.setState({ todos: newTodo });
  };

  deleteRow(toBeDeleted) {
    const newTodo = this.state.todos.filter((todo) => todo.id !== toBeDeleted);
    console.log(newTodo);
    console.log(toBeDeleted);

    this.setState({
      todos: newTodo,
      id: this.state.id - 1
    });
  }

  render() {
    const columns = [
      {
        Header: "Date",
        accessor: "date"
      },
      {
        Header: "Description",
        accessor: "description"
      },
      {
        Header: "",
        accessor: "id",
        Cell: ({ value }) => (<button onClick={() => { this.deleteRow(value) }}>Delete</button>)
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <h2> SIMPLE TODO LIST </h2>
        </header>
        <div id="input">
          <form onSubmit={this.addTodo}>
            <span>Date: </span>
            <input type="text" onChange={this.dateChanged} value={this.state.date} />
            <span>Description: </span>
            <input type="text" onChange={this.inputChanged} value={this.state.description} />
            <input type="submit" value="Add" />
          </form>
        </div>

        <ReactTable
          data={this.state.todos}
          columns={columns}
          sortable={true}
          defaultPageSize={10}
        />
      </div>
    );
  }
}

export default App;
