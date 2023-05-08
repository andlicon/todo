import React, { useState } from 'react';

import '../../styles/todo.css';

const Todo = () => {
  // hooks
  const [adder, setAdder] = useState('');
  const [items, setItems] = useState([]);

  const handlerAdder = ({target}) => {
    setAdder(target.value);
  }

  return(
    <div className='todo'>
      {/* anadir informacion al todo */}
      <div className='todo__adder content-center'>
        <input 
          type='text'
          className='todo__item todo__input'
          id='adder'
          name='adder'
          onChange={(handlerAdder)}
          value={adder}
        />
      </div>
      {/* cuerpo del todo */}
      <div className='todo__body content-center'></div>
      {/* estatus del todo */}
      <div className='todo__status'>
        <p className='status'>
          {
            items.length == 0 
            ? 'No task, add a task' 
            : `${cantidadItems} item left`
          }
        </p>
      </div>
    </div>
  );
};
export default Todo;