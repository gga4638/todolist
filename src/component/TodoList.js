import React, {useEffect, useState} from "react";
import TodoItem from "./TodoItem";

export default function TodoList({items, setItems}) {
    const onRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    const onCheck = (e) => {
        const cnt = items.filter(item => item.check == false).length;
        //console.log( e.currentTarget.checked);
        //console.log("개수 : " + cnt);
    }

    return (
        <ul>
            {items.map(item => (
                <TodoItem item={item} onRemove={onRemove} setItems={setItems} onCheck={onCheck}/>
            ))}
        </ul>
    );
}