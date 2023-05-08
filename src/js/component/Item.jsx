import React from 'react';

import '../../styles/item.css'

const Item = ({ items, setItems, index, task }) => {
  
  const clickHandler = () => {
    const arreglo = items.slice();
    const newArray = arreglo.filter( (element, i) => {
      return index!=i;
    });

    setItems(newArray);
  }
  
  return (
    <div 
      className='item'
      onClick={clickHandler}
    >
      <p className='item-p'>
        {task}
      </p>
    </div>
  );
};
export default Item;