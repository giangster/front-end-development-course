import React, { Component } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

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

    deleteItem = (event) => {
        const newTodo = this.state.todos.filter((todo, index) =>
            index !== parseInt(event.target.id))

        this.setState({
            todos: newTodo
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2> SIMPLE TODO LIST </h2>
                </header>
                <div id="input">
                    <form onSubmit={this.addTodo}>
                        <span>Date: </span><input type="text" onChange={this.dateChanged} value={this.state.date} />
                        <span>Description: </span><input type="text" onChange={this.inputChanged} value={this.state.description} />
                        <input type="submit" value="Add" />
                    </form>
                </div>
                <TodoTable todos={this.state.todos} onSubmit={this.deleteItem} />
            </div>

        );
    }
}

export default App;
