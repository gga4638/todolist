import React from "react";
import Day from "./Day";
import TodoLeft from "./TodoLeft";

function TodoHead({todoCount}) {

    return (
        <div className="todo-header">
            <Day />
            <TodoLeft todoCount={todoCount}/>
        </div>
    );
}

export default React.memo(TodoHead);