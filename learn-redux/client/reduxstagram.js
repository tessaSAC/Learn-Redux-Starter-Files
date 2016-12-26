// let's go!

import React from 'react';  // import React node module (note lack of `../`)
import { render } from 'react-dom';

// IMPORT CSS
import css from './styles/style.styl';  // Webpack will embed this in a JS file for us

// IMPORT COMPONENTS
// import Main from './components/Main';
// Now that we have an `App` we need to import our <App /> instead of <Main />
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// IMPORT REACT ROUTER DEPS
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';  // The package that allows us to use REDUX *WITH* REACT
import store, { history } from './store';  // `store` is not in brackets bc it's the DEFAULT export; `history` is a NAMED export therefore is in { curlies }

//IMPORT SENTRY STUFF FOR AUTO ERROR TRACKING
import Raven from 'raven-js';  // Imports 'Raven', the official client-side Sentry browser that auto-reports caught errors to Sentry
import { sentry_url, logException } from './data/config';  // Imports sentry URL and logException function

// Now it will catch all errors that normally happen in user's console and send it to sentry along with where it happened and what happened with it
Raven.config(sentry_url, {
	// Can create custom tags for each git version of the app, e.g.
	tags: {
		git_commit: 'alaskdjf',
		userLevel: 'editor'
	}
}).install();

// Can use logException to log custom errors
logException(new Error('download failed!'), {  // We are manually throwing the error here
	email: 'wesbos@gmail.com'  // `logException` gives additional context to the error, e.g. whose DL failed
});

// If you just want to log a message and don't need a stack trace:
Raven.captureMessage('Something bad happened!');

// Ask user for feedback in a form:
Raven.showReportDialog();

// BUILD ROUTER COMPONENT
// `router` uses parens to render out a whole bunch of stuff; NB: Router is a COMPONENT
// PROVIDER exposes store to application; gets store from above `import`
// `browserHistory` => `history` -- AUGMENTED history from `store.js`
// `Route path="/"` => Matches everything that is forward-slash
// `IndexRoute` => If it's just "/" we're going to PhotoGrid (aka `IndexRoute`) -- child of <Main />
// `Route path="view/:postId` => Nested child route -- single photo view at `/view/:postId` -- more specific child of <Main />
const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
);
// To check that it worked, click on the `Provider` in REACT devtools
// Then go to console, `$r.store.getState();` -- gets STORE's STATE

render(router, document.getElementById('root'));  // Renders `<router />`  component in `root` element

// render(<Main />, document.getElementById('root'));  // A test to make sure our website is working; note the `root` div in `index.html`