import React from "react";

export default function TodoItem({item, onRemove, onCheck}) {
    return (
        <div className="todo-item">
            <input type="checkbox" name="todo" id={item.id}
                   onClick={(e) => onCheck(item.id, e)} />
            <label className="item-check-circle" for={item.id}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                     className="bi bi-check2" viewBox="0 0 16 16">
                    <path
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
            </label>
            <label>{item.text}</label>
            <svg onClick={() => onRemove(item.id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                 className="bi bi-trash2-fill" viewBox="0 0 16 16">
                <path
                    d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
            </svg>
        </div>
    );
}

//export const MemoizedTodoItem = React.memo(TodoItem);