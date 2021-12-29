import React from "react";
import Day from "./Day";
import TodoLeft from "./TodoLeft";

function TodoHead() {
    return (
        <div className="todo-header">
            <Day />
            <TodoLeft />
        </div>
    );
}

export default React.memo(TodoHead);