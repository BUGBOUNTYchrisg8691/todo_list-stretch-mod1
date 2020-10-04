import React from "react"
import Todo from "./Todo"

export default function TodoList(props) {
    const { todos, toggleTodo } = props

    return (
        <div>
            {todos.map(todo => {
                return (
                    <Todo key={ todo.id } toggleTodo={ toggleTodo } todo={ todo } />
                )
            })}
        </div>
    )
}
