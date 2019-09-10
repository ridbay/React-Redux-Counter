import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from "react-redux";




const initialState = {
    count: 0
}
const reducer = (state = initialState, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log(store)
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'RESET'});

ReactDOM.render( <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

