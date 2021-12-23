import './App.css';
import React, {useEffect, useState} from "react";
import TodoList from './component/TodoList';
import TodoHead from './component/TodoHead';

function App() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');
    const [todoCount, setTodoCount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.length === 0 ){
            return;
        }
        const newItem = {
            text: text,
            id: Date.now(),
            check: false
        };
        setItems(items.concat(newItem));
        setText('');
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        setTodoCount(items.filter(item => item.check === false).length);
    });

    return (
    <div className="App">
      <div className='todo'>
        <TodoHead count={todoCount}/>
        <TodoList items={items} setItems={setItems} />
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                value={text}
            />
            <button>
                등록 #{items.length + 1}
            </button>
        </form>
      </div>
    </div>
    );
}

export default App;