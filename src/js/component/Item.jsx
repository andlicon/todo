import React from 'react';

import '../../styles/item.css'

const Item = ({ index, task, handler }) => {

  return (
    <div 
      className='item'
      onClick={ () => handler(index) }
    >
      <p className='item-p'>
        {task}
      </p>
    </div>
  );
};
export default Item;