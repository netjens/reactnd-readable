import {connect} from 'react-redux'
//import {updatePost} from '../../actions'
import PostDetail from '../ui/PostDetail'
import {withRouter} from 'react-router'

const mapStateToProps = (state, props) => {
    const selectedPost = state
        .allPosts
        .filter((post) => post.id === props.match.params.post_id)
        .pop();
    return ({post: selectedPost});
}

const Container = connect(mapStateToProps)(PostDetail);
export default withRouter(Container)