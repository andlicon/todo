import React, {useState} from 'react';
import '../../styles/error.css';

const Error = ({mensaje }) => {
  const [visible, setVisible] = useState(true);
  const handlerOnClick = () => {
    setVisible(false);
  }

  return (
    <>
      {
        visible&& 
          <div 
            className='error'
            onClick={handlerOnClick}
          >
            <p className='error__mensaje'>
              {mensaje}
            </p>
          </div>
      }
    </>
  );
}
export default Error;