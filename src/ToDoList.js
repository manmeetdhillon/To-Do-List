import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div style={{textAlign:'center'}}>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button className="  bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 text-center" style={{margin: '20px'}} onClick={handleFilter} >Clear Completed</button>
          

        </div>
    );
};

export default ToDoList;