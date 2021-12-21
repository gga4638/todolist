import React from "react";

export default function TodoItem(props) {
    const handleChange = e => {
        console.log(props.item.id + " : " + e.currentTarget.checked);
        props.check(e.currentTarget.checked);
    }

    return (
        <li key={props.item.id}>
            <input type="checkbox" name="todo" onChange={handleChange} />
            <label>{props.item.text}</label>
            <button> X</button>
            <br />
        </li>
    );
}