import React from "react";
import {useTodoState} from "../TodoContext";

function TodoLeft() {
    const todos = useTodoState();
    const todoLeft = todos.filter(todo => todo.check === false).length;
    return (
        <p className="todo-left">
            할 일 {todoLeft}개 남음
        </p>
    );
}

export default React.memo(TodoLeft);