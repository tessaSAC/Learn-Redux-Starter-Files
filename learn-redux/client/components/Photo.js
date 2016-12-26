import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';  // From React CSS Transition Group add-on

const Photo = React.createClass({
	render() {
		const { post, i, comments } = this.props;  // Creates the following consts from appropriate `props`
		return(
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.caption} className="grid-photo" />
					</Link>

					<CSSTransitionGroup transitionName="like"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
					{/* NB: `key` is set to `post.likes` so that every time the # of likes changes the animation replays */}
						<span key={post.likes} className="likes-heart">{post.likes}</span>
					</CSSTransitionGroup>

				</div>

				<figcaption>
					<p>{post.caption}</p>
					<div className="control-buttons">
						<button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
						{/* Makes a button with UNICODE heart + numLikes */}
						<Link className="button" to={`/view/${post.code}`}>
							<span className="comment-count">
								<span className="speech-bubble"></span>
								{ comments[post.code] ? comments[post.code].length : 0 }
							</span>
						</Link>
					</div>
				</figcaption>
			</figure>
		);
	}
});

export default Photo;