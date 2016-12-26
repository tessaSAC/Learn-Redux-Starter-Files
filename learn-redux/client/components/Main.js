import React from 'react';
import { Link } from 'react-router';  // import only `Link` from react-router

export default React.createClass({  // ALT: `const Main = React.createClass() {};` => `export default Main;``
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Westagram</Link>
				</h1>
				{ React.cloneElement(this.props.children, this.props) }  {/* Takes any props from parents and passes them on to any children */}
				{/* ^^^^Will freak out before we pass it any children; don't panic */}
			</div>
		)
	}
})