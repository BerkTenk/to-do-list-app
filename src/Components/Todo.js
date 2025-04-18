import React from 'react'
import Button from "react-bootstrap/Button"
import { FaTrash } from "react-icons/fa";
console.log("deneme");
const Todo = ({ todo, index, completeTodo,unCompleteTodo, removeTodo }) => {
  const handleRemove = () => {
    if (window.confirm("This task will be deleted. Are you sure ?")){
      removeTodo(index);
    }
  };
    return (
      <div className='row d-flex justify-between mt-4 mb-4 '>
      <div className=' pt-2 col-sm-8' style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
        {todo.text}
        </div>
        <div className='col-sm-4'>
          
          <Button variant={todo.isCompleted ? "warning" : "primary"} onClick={() => { todo.isCompleted ? unCompleteTodo(index)  : completeTodo(index) }}> {todo.isCompleted ? "UnComplete" : "Complete"} </Button>
          <Button variant='danger'className='ms-4' onClick={handleRemove}>
            <FaTrash />
          </Button>
        
      </div>
      </div>
    );
  };

  export default Todo;
