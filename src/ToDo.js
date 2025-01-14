import React from 'react';
import './index.css'

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick}  style={{alignItems:'center'}}
        className={`${todo.complete ? "todo strike" : "todo"} todo-item `}>
            {todo.task}
        </div>
    );
};

export default ToDo;