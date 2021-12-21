import React from "react";
import Day from "./Day";
import TodoLeft from "./TodoLeft";

export default function TodoHead(props) {

    return (
        <>
            <Day />
            <TodoLeft count={props.count}/>
            <hr />
        </>
    );
}