import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from '../actions/todo';
import TodoList from '../components/TodoList';

const App = ({ todos, actions }) => {
  return <TodoList todos={ todos } actions={ actions } />;
};

App.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
