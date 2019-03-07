import React from 'react';

const TodoTable = (props) => {
    const todos = props.todos.map((todo, index) =>
        <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.description}</td>
            <td><button type="submit" id={index} onClick={props.onSubmit}>Delete</button></td>
        </tr>)
    return (
        <div>
            <table>
                <tbody>
                    {todos}
                </tbody>
            </table>
        </div>
    );
}

export default TodoTable;