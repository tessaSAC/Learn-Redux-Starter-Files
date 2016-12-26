import React from 'react';
import Photo from './Photo';

export default React.createClass({  // ALT: `const Main = React.createClass() {};` => `export default Main;``
	render() {
		return (
			<div className="photo-grid">
				{/* I'm the photo grid  {/* Checks the react-routing */}
				{this.props.posts.map((post, idx) => <Photo {...this.props} key={idx} i={idx} post={post} />)}
			{/*
				`map`: Iterates over each post and renders `Photo.js` for each
				`{...this.props}`: Passes down all props with ES6 spread
				`i={idx}`: Remember, `key` is not for you!
				`post`: Passes down add'l info about each post
			*/}
			</div>
		)
	}
})