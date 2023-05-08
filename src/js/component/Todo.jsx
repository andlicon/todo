import React, { useState } from 'react';

import '../../styles/todo.css';
// componentes
import Error from '../component/Error.jsx';

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

  const generarError = mensaje => {
    setError(mensaje);
    setTimeout(
      () => { setError(null);}
    , 3000);
  };

  const anadirItem = () => {
    if( adder==='' ) {
      generarError('No se puede cargar un item vacío');
      return;
    }
    if( items.some( element => element==adder ) ) {
      generarError('No se pueden duplicar las tareas');
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
        && <Error mensaje={error} />
      }
    </div>
  );
};
export default Todo;