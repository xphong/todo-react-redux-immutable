import Immutable from 'immutable';

import { ADD_TODO, DELETE_TODO } from '../constants';

const INITIAL_STATE = Immutable.List(['Learn Redux']);

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.unshift(action.todo);
    case DELETE_TODO:
      return state.filter((todo, index) => index !== action.index);
    default:
      return state;
  }
}
