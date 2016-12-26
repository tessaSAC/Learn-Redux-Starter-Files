import React from 'react';
import { Link } from 'react-router';  // import only `Link` from react-router

import Photo from './Photo';

// IMPORT COMMENTS
import Comments from './Comments';

export default React.createClass({  // ALT: `const Main = React.createClass() {};` => `export default Main;``

	render() {
		// INDEX OF THE POST
		const { postId } = this.props.params;  // Destructures `postId` from `paramas` obj into its own variable
		const i = this.props.posts.findIndex(post => post.code === postId);  // `findIndex` -- newer method
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];  // Because not every post will have comments
		// console.log(post);

		// GET US THE POST
		return (
			<div className="single-photo">
				{/* I'm the single grid  {/* Checks the react-routing */}
				<Photo i={i} post={post} {...this.props}></Photo>
				<Comments postComments={postComments} {...this.props} />
			</div>
		)
	}

})