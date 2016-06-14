import Immutable from 'immutable'

import { ADD_TODO, DELETE_TODO } from '../constants';

const INITIAL_STATE = Immutable.List(['Learn Redux']);

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.push(action.todo)
    default:
      return state
  }
}
