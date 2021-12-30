import React from "react";
import TodoItem from "./TodoItem";
import {TodoProvider, useTodoDispatch, useTodoState} from "../TodoContext";

function TodoList() {
    const todos = useTodoState();

    return (
        <div className="todo-body">
            {todos.map(item => (
                    <TodoItem key={item.id}
                              id={item.id}
                              text={item.text}
                    />
                ))}
        </div>
    );
}

export default React.memo(TodoList);