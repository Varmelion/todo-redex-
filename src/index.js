import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'


const initialState = {
tasks: [
    "Testing first state"
]
};



// this is my reduser( czysta funkcja )
function listToDo(state = initialState, action) {
    if (action.type === 'ADD_TASK') {
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
    
    };
      }else if (action.type === 'DELETE_TASK') {
      return state;
    }   
    return state;
    }
//   dodalem devtools w mozila
    const store = createStore(listToDo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));


serviceWorker.unregister();

