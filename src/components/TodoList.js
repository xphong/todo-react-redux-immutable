import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './AddTodo';
import { addTodo } from '../actions/todo';

const TodoList = ({todos, dispatch}) => (
  <div>
    <h1>Todos</h1>
    <AddTodo onChange={e => {
      if(e.keyCode == 13){
        dispatch(addTodo(e.target.value))
        e.target.value = ''
      }
    }}/>
    {todos.map(todo => <p key={todo}>{todo}</p>)}
  </div>
)

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(TodoList);
