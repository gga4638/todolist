import React from "react";
import TodoItem from "./TodoItem";

function TodoList({items, setItems, setTodoCount}) {
    const onRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    const onCheck = (id, e) => {
        //setItems(items.map(item => item.id === id ? {...item, check: !item.check} : item));
        items.forEach(item => {
                if(item.id === id) {
                    item.check = e.currentTarget.checked; // check : t(체크)/f(체크 안됨) 지정
                    return;
                }
        });

        // 할일 갯수 초기화
        setTodoCount(items.filter(item => item.check === false).length);
    }

    return (
        <>
            {items.map(item => (
                <TodoItem item={item}
                          onRemove={onRemove}
                          onCheck={onCheck}
                          key={item.id}
                />
            ))}
        </>
    );
}

export default React.memo(TodoList);