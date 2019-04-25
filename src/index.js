import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import MainReducer from './reducers/MainReducer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = compose(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();