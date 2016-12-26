// REDUX STORE -- holds all application-related data
// i.e. hold state in REDUX STORE instead of in component states


import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'  // Allows us to sync react-router with Redux store
import { browserHistory } from 'react-router';  // Use modified history to connect router with Redux

// IMPORT THE ROUTE REDUCER
import rootReducer from './reducers/index';

// IMPORT DEFAULT DATA
import comments from './data/comments';
import posts from './data/posts';



// CREATE AN OBJECT FOR THE DEFAULT DATA
const defaultState = {
	posts,
	comments
};

// ACTIVATE REDUX DEVTOOLS
// DevTools doesn't know about the store -- we need to enhance our store
// First we create the enhancers:
const enhancers = compose(  // `compose` a method imported from `redux` that allows us to infuse our store w/enhancers
	winow.devToolsExtension ? window.devToolsExtension() : f => f();
	// Check for the Redux dev tools in the window, else return the store itself
);

// Pass enhancers into our store
const store = createStore(rootReducer, defaultState, enhancers);  // `createStore` takes 2 args: `rootReducer` and `defaultState` -- ig we can also pass it enhancers ¯\_(ツ)_/¯

// Was previously:
// `createStore` takes 2 args: `rootReducer` and `defaultState`
// const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// not sure what the difference is...


// WHAT EACH REDUX DEV TOOL DOES
// Reset -- removes all actions (incl commits) and bring store back to initial state
// Revert -- removes everything since previous commit/pageload
// Sweep -- removes any disabled actions from logs (as if they never happened)
// Commit -- makes current state initial state and clears all those actions from log


// BROWSER HISTORY
export const history = syncHistoryWithStore(browserHistory, store);  // Weaving `store` in with `browserHistory`



// REDUCER HOT-RELOAD
// It *is* possible to hot-reload reducers:
// Accept the hot-reload
// Re-require the reducer -- recompiles root reducer and swaps it out in the store w/o us having to manually refresh
if (module.hot) {  // If the module is hot,
	module.hot.accept('./reducers/', () => {  // run a function that re-requires the ROOT reducer
		const nextRootReducer = require('./reducers/index').default;  // re-require the ROOT reducer
		// N.B.: MUST use `require`; can't use ES6 `import` inside a function!
		store.replaceReducer(nextRootReducer);  // Replaces ROOT reducer
	});
}


export default store;  // ALT to above export default const store = ...