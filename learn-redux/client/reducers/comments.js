// Make a reducer for each piece (slice) of state

// A reducer takes in two things:
// 1. THE ACTION (info about what happened) -- action
// 2. A COPY of the CURRENT STATE -- store

// REDUX: OK, let me see what changed
// Then comes in a new copy of the STORE with changes
// Return the new UPDATED STORE
// REACT takes care of updating the DOM

function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			// return the new state + new comment
			return [
				...state,  // Takes every item from existing `state` and puts it in new array
				{
					user: action.author,
					text: action.comment
				}
			]
		case 'REMOVE_COMMENT':
			console.log('Removing a comment', `state: ${state}`);
			// We need to return the new state without the deleted comment
			return [
					// From the start to the one we want to delete
					...state.slice(0, action.i),
					// After the deleted one, to the end
					...state.slice(action.i + 1)
				 ];
		default:
		 	return state;
	}
}

function comments(state = [], action) {
	if (typeof action.postId !== 'undefined') {
		return {
			// Take the current state
			...state,
			// Overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)  // Don't forget to pass down state!!!!!
		}
	}
	// console.log(state, action);
	return state;  // Return state because we need to take in the state, modify it, and return the new state.
}

export default comments;