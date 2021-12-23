import React from "react";

export default function TodoItem({item, onRemove, onCheck}) {
    return (
        <li>
            <input type="checkbox" name="todo"
                   onClick={(e) => onCheck(item.id, e)}/>
            <label>{item.text}</label>
            <button onClick={() => onRemove(item.id)}> X</button>
            <br />
        </li>
    );
}