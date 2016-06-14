import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './AddTodo';
import { addTodo, deleteTodo } from '../actions/todo';

const TodoList = ({todos, dispatch}) => (
  <div>
    <h1>Todos</h1>
    <AddTodo onChange={e => {
      if(e.keyCode == 13){
        dispatch(addTodo(e.target.value))
        e.target.value = ''
      }
    }}/>
    {todos.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
      dispatch(deleteTodo(index))
    }}>X</button></p>)}
  </div>
)

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(TodoList);
