// CAN ONLY HAVE *ONE* REDUCER
// THIS IS THE REDUCER TO REDUCE THEM ALL

import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';


// Remember the `rootReducer` from `reduxtagram.js?`
const rootReducer = combineReducers({posts, comments, routing: routerReducer})  // Reduce posts and comments into one; use the routing because that also lives in our state -- to log the state changes in our REDUX (`routerReducer` is pulled from `react-router-redux` above)

// PAST ERROR: sync.js:38Uncaught Error: Expected the routing state to be available either as `state.routing`
// previous version had `router: routerReducer`
// state = store
// `posts` and `comments` are exporting `console.log`s so they're fine
// expected `router` to be `routING`


export default rootReducer;