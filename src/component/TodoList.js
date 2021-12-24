import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({items, setItems}) {
    const onRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    const onCheck = (id, e) => {
        const checkItem = items.filter(item => item.id === id)[0];

        // checkItem 객체 check : t(체크)/f(체크 안됨) 지정
        checkItem.check = e.currentTarget.checked;

        // 체크박스 클릭으로 변경 된 item 교체
        setItems(items.filter((item) => {
            if(item.id === checkItem.id) {
                item = checkItem;
            }
            return item;
        }));
    }

    return (
        <>
            {items.map(item => (
                <TodoItem item={item} onRemove={onRemove} setItems={setItems} onCheck={onCheck}
                          key={item.id}/>
            ))}
        </>
    );
}