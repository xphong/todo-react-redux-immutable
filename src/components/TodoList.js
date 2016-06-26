import React, { PropTypes } from 'react';

import AddTodo from './AddTodo';

const TodoList = ({todos, actions}) => (
  <div>
    <h1>Todos</h1>
    <AddTodo onChange={e => {
      if(e.keyCode == 13){
        actions.addTodo(e.target.value)
        e.target.value = ''
      }
    }}/>
    {todos.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
      actions.deleteTodo(index)
    }}>X</button></p>)}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  })
};

export default TodoList;
