import React from "react";

export default function TodoItem({item, onRemove, onCheck}) {
    const handleChange = e => {

        if(e.currentTarget.checked) {
            //console.log(e.currentTarget.checked);
            //console.log(item.id + ": " + item.check);
            return;
        }
        item.check = false;
        //console.log(item.id + ": " + item.check);
    }


    return (
        <li key={item.id}>
            <input type="checkbox" name="todo" onChange={handleChange} onClick={onCheck}/>
            <label>{item.text}</label>
            <button onClick={() => onRemove(item.id)}> X</button>
            <br />
        </li>
    );
}