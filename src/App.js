import './App.css';
import React, {useEffect, useState} from "react";
import TodoList from './component/TodoList';
import TodoHead from './component/TodoHead';
import AddTodoItem from "./component/AddTodoItem";
import storage from 'redux-persist/lib/storage';

function App() {
    let persistItems = () => JSON.parse(localStorage.getItem('items'));
    const [items, setItems] = useState(persistItems === null ? [] : persistItems);
    const [todoCount, setTodoCount] = useState(0);

    useEffect(() => {
        setTodoCount(items.filter(item => item.check === false).length);
    },[items]);

    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(items));
        setItems(persistItems);
    }, [todoCount]);

    // 현재 컴포넌트 간에 props를 일일이 전달하고 있다. 어쩐지 뭔가 이상했어...
    // 리액트 컨텍스트를 사용하여 props drilling 현상을 개선하자!
    // 컨텍스트 팩토리 함수 createContext() 를 호출
    // 참고 : https://jeonghwan-kim.github.io/dev/2021/05/05/react-context.html

    return (
        <div className="App">
          <div className='todo'>
            <TodoHead todoCount={todoCount}/>
            <div className="todo-body">
                <TodoList items={items} setItems={setItems} />
            </div>
            <AddTodoItem items={items} setItems={setItems} />
          </div>
        </div>
    );
}

export default App;