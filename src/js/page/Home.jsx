import React from 'react';

import '../../styles/home.css';
// componentes
import Todo from '../component/Todo.jsx';

//create your first component
const Home = () => {
	return (
		<div className='container todo-container'>
      {/* title */}
      <h1 className='main-title'>
        todos
      </h1>
      {/* content */}
      <Todo />
		</div>
	);
};

export default Home;
