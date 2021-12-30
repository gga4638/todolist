import './App.css';
import React from "react";
import TodoList from './component/TodoList';
import TodoHead from './component/TodoHead';
import AddTodoItem from "./component/AddTodoItem";
import {TodoProvider} from "./TodoContext";

function App() {
    return (
        <div className="App">
            <div className='todo'>
                <TodoProvider>
                    <TodoHead />
                    <TodoList />
                    <AddTodoItem />
                </TodoProvider>
            </div>
        </div>
    );
}

export default App;