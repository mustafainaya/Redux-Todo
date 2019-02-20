import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { loadState, saveState } from './app/localStore';

import { Provider } from 'react-redux';
import reducer from './reducers/Reducer';
import App from './App';

const mustafa = loadState();

const store = createStore(reducer, mustafa);
store.subscribe(() => {
	saveState({
		todos: store.getState().todos
	});
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
