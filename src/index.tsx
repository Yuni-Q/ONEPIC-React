import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux';

import { createStore } from 'redux';


const ADD_AGE = 'ADD_AGE';

export function addAge() {
  return {
    type: ADD_AGE
  }
}

function ageApp(state: { age: number; } = { age: 35 }, action: { type: 'ADD_AGE' }) {
  if (action.type === ADD_AGE) {
    return {
      age: state.age + 1
    }
  }
  return state;
}

const store = createStore(ageApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
