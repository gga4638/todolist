import React from "react";

function TodoLeft({todoCount}) {

    return (
        <p className="todo-left">
            할 일 {todoCount}개 남음
        </p>
    );
}

export default React.memo(TodoLeft);