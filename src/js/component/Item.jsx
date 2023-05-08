import React from 'react';

import '../../styles/item.css'

const Item = props => {
  return (
    <div className='item'>
      <p className='item-p'>
        {props.task}
      </p>
    </div>
  );
};
export default Item;