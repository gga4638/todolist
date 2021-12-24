import React from "react";

export default function TodoLeft({todoCount}) {

    return (
        <p className="todo-left">
            할 일 {todoCount}개 남음
        </p>
    );
}