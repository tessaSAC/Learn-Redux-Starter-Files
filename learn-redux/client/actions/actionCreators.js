// REDUX ACTION: Whenever someone does something on your app
// Action has two parts:
// 1. Which action has been fired off ("dispatched")
// 2. Payload (further information about the input of that action)

// "Time-traveling" -- toggling dispatched actions on and off

// The `return`ed object is the ACTION but we need to EXPORT them so the actionCreator can put them together
// Often devs make one `actionCreator` file per action but we have so few we won't do that here


// INCREMENT
export function increment(index) {  // `index` -- which post is going to have its `likes incremented`
	// Return an OBJECT because an ACTION is an OBJECT with two things, a TYPE and a PAYLOAD (in this case the `index`)
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// ADD COMMENT
export function addComment(postId, author, comment) {
	console.log('Wes testing dispatching `addComment`');
	// TYPE: 'ADD_COMMENT'
	// PAYLOAD: postId, author, comment
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// REMOVE COMMENT
export function removeComment(postId, i) {
	// TYPE: 'REMOVE_COMMENT'
	// PAYLOAD: index (`i`) of which comment to remove on which `postId`
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}