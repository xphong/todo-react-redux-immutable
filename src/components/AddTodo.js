import React from 'react';

const AddTodo = ({onChange}) => (
  <div>
    <h3>New</h3>
    <input type="text" onKeyUp={onChange}/>
  </div>
);

export default AddTodo;
