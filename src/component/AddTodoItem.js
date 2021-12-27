import React, {useEffect, useRef, useState} from "react";

function AddTodoItem({items, setItems}) {
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const inputFocus = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.length === 0 ) {
            return;
        }
        const newItem = {
            text: text,
            id: Date.now(),
            check: false
        };
        setItems(items.concat(newItem));
        setText('');
        setIsVisible(false);
    }

    const handleChange = (e) => { setText(e.target.value); }
    const visibleChange = (e) => { setIsVisible(e.currentTarget.checked); }

    useEffect(() => {
        if(!isVisible) { return; }
        inputFocus.current.focus();
    },[isVisible]);

    return (
        <>
            <div className= {`todo-footer ${isVisible ? 'visible' : ''}`}>
                <div className="item-input">
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            value={text}
                            placeholder="할 일을 입력 후, Enter 를 누르세요"
                            ref={inputFocus}
                        />
                        <button>
                            등록 #{items.length + 1}
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-toggle">
                <input type="checkbox" id="input-toggle" onChange={visibleChange} checked={isVisible ? true: false}/>
                <label className="" htmlFor="input-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                         className="bi bi-plus" viewBox="0 0 16 16">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </label>
            </div>
        </>
    );
}

export default  React.memo(AddTodoItem);