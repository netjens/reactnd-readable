import { connect } from 'react-redux'
import { loadPosts } from '../../actions'
import PostList from '../ui/PostList'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) =>
({
    posts: state.allPosts
});

const mapDispatchToProps = (dispatch) =>
     (//wenn klammer fehlt, interpretiert er rückgabe nicht als objekt, es sei denn geschweifte klammer ist auf selber ebene wie return anweisung
        {
        onLoadPosts: () => dispatch( loadPosts())
    }
);


const Container = connect(mapStateToProps,mapDispatchToProps)(PostList);

export default withRouter(Container)