import React, {useEffect, useState} from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    const [check, setCheck] = useState(false);

    useEffect(() => {
        console.log("변경 : " + check);
        });

    return (
        <ul>
            {props.items.map(item => (
                <TodoItem item={item} check={setCheck}/>
            ))}
        </ul>
    );
}