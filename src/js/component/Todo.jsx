import React, { useState } from 'react';

import '../../styles/todo.css';

const Todo = () => {
  // hooks
  const [adder, setAdder] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const handlerChange = (event) => {
    setAdder(event.target.value);
  }

  const handlerOnKey = ({code}) => {
    if( code=='Enter' ) anadirItem();
  }

  const anadirItem = () => {
    if( adder==='' ) {
      setError('No se puede cargar un item vacío');
      return;
    }
    if( items.some( element => element==adder ) ) {
      setError('No se pueden duplicar las tareas');
      return;
    }

    setItems([...items, adder]);
    setAdder('');
  }

  return(
    <div className='todo'>
      {/* anadir informacion al todo */}
      <div 
        className='todo__adder content-center'
        onKeyPress={handlerOnKey}
      >
        <input 
          type='text'
          className='todo__item todo__input'
          id='adder'
          name='adder'
          onChange={(handlerChange)}
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
            : `${items.length} item left`
          }
        </p>
      </div>
      {/* error */}
      {
        error != null
        && <div className='error'>
            <p className='error__mensaje'>{error}</p>
          </div>
      }
    </div>
  );
};
export default Todo;