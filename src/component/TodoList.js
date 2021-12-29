import React from "react";
import TodoItem from "./TodoItem";
import {useTodoDispatch, useTodoState} from "../TodoContext";

function TodoList() {
    const todos = useTodoState();

    return (
        <>
            {todos.map(item => (
                <TodoItem key={item.id}
                          id={item.id}
                          text={item.text}
                />
            ))}
        </>
    );
}

export default React.memo(TodoList);