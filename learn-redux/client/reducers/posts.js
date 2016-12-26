// Make a reducer for each piece of state

// A reducer takes in two things:
// 1. THE ACTION (info about what happened) -- action
// 2. A COPY of the CURRENT STATE -- store

// REDUX: OK, let me see what changed
// Then comes in a new copy of the STORE with changes
// Return the new UPDATED STORE
// REACT takes care of updating the DOM

// TO MANUALLY RUN THE REDUCER:
// In REACT devtools select the `Provider`
// In CONSOLE: `$r.store.dispatch({type: 'INCREMENT_LIKES', index: 0});`
// All reducers run! Why?
// In Redux *ALL* reducers run upon dispatch of even just one
// Whether you choose to act on that determines what changes in the app's state

// function posts(state = [], action) {
// 	console.log('The post will change!');
// 	console.log(state, action);
// 	return state;  // Return state because we need to take in the state, modify it, and return the new state.
// }


function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES':
			console.log('Incrementing Likes!!');
			const i = action.index;
			return [
				...state.slice(0, i),  // All images up to BEFORE the one we're updating
				{ ...state[i], likes: state[i].likes + 1 },  // Makes a copy of the post we want and increments its `likes` state by 1
				...state.slice(i + 1) , // All images AFTER the one we're updating
			]
		// Return the updated state
		default:
			return state;  // Remember, all of the reducers run so if we don't care which one we simply `return` the `state` in the default case
	}
}

export default posts;