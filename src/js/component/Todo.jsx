import React, { useState } from 'react';

import '../../styles/todo.css';

const Todo = () => {
  const [items, setItems] = useState([]);

  const cantidadItems = items.length;
  return(
    <div className='todo'>
      {/* anadir informacion al todo */}
      <div className='todo__adder'></div>
      {/* cuerpo del todo */}
      <div className='todo__body'></div>
      {/* estatus del todo */}
      <div className='todo__status'>
        <p className='status'>
          {
            cantidadItems==0 
            ? 'No task, add a task' 
            : `${cantidadItems} item left`
          }
        </p>
      </div>
    </div>
  );
};
export default Todo;