import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';  // imports *ALL* the actions
import Main from './Main';


function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);
// mapStateToProps
// mapDispatchToProps
// These two functions surface data from `state` and `actionCreators` via props
// `(Main)` immediately calls it against `<Main />`
// connect() adds all of App's PROPS and ACTIONS to `<Main />`
// CONNECT: injects data from STORE into w/e COMPONENT level we need -- goes directly to relevant component instead of having to go from component to component to component several levels deep.


export default App;
