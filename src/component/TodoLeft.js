import React from "react";

export default function TodoLeft(props) {

    return (
        <p className="todo-left">
            할 일 {props.count}개 남음
        </p>
    );
}