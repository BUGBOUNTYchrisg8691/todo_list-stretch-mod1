import React, {useState} from 'react'


export default function Todo(props) {
    const { todo, toggleTodo } = props

    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={ handleTodoClick } />
                { todo.name }
            </label>
        </div>
        // <div className="todo">
        //     <input type="checkbox" value={isDone} onChange={checkDone} />
        //     <p>{todo.text}</p> 
        // </div>
    )
}