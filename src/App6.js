import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            date: '',
            description: ''
        }
    }

    dateChanged = (event) => {
        this.setState({
            date: event.target.value
        });
    }

    inputChanged = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    addTodo = (event) => {
        event.preventDefault();

        let task = {
            date: this.state.date,
            description: this.state.description
        }
        this.setState({
            todos: [...this.state.todos, task]
        });
    }

    deleteItem(toBeDeleted) {
        const newTodo = this.state.todos.filter(todo => {
            return todo !== toBeDeleted;
        })

        this.setState({
            todos: [...newTodo]
        });
    }

    render() {
        const itemRows = this.state.todos.map((todo, index) =>
            <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.description}</td>
                <td><button onClick={() => this.deleteItem(todo)}>Delete</button></td>
            </tr>
        )
        return (
            <div className="App">
                <header className="App-header">
                    <h2> SIMPLE TODO LIST </h2>
                </header>
                <div>
                    <form onSubmit={this.addTodo}>
                        <span>Date: </span><input type="text" onChange={this.dateChanged} value={this.state.date} />
                        <span>Description: </span><input type="text" onChange={this.inputChanged} value={this.state.description} />
                        <input type="submit" value="Add" />
                    </form>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr><th>Date</th><th>Description</th></tr>
                            {itemRows}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default App;
