import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  setVisibilityFilter
} from "../actions/actionCreator";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";

class Table extends Component {
  render() {
    return (
      <div >
        <nav >
            <button
              className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ALL ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
            >
             All
            </button>
            <button
               className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_COMPLETED ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
            >
              Completed
            </button>
            <button
               className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ACTIVE ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
            >
              Active
            </button>
        </nav>
        {this.props.todos.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <th scope="col">Todos</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todos.map(todo => (
                <tr key={todo.id}>
                  <td
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none"
                    }}
                  >
                    {todo.text} {todo.completed === true ? "(completed)" : ""}
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.deleteTodo(todo.id)}
                    >Delee</button>
                    <button
                      className="fas fa-check-circle"s
                      onClick={() => this.props.toggleTodo(todo.id)}
                    >Done</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
         
            <div>
              Todo List is empty or Filter results show no results
            </div>
        )}
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
