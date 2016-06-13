import { ADD_TODO, DELETE_TODO } from '../constants';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index
  }
}
