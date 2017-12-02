import { connect } from 'react-redux'
import { changeScore, deletePost, loadComments, updateOrCreateComment, deleteComment, changeCommentScore, loadPost } from '../../actions'
import PostDetail from '../ui/PostDetail'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) => {

    const selectedPost = state
        .allPosts
        .filter((post) => post.id === props.match.params.post_id)
        .pop();
    if (selectedPost === undefined) {
        return ({
        })

    } else {
        return (
            {
                post: selectedPost,
                comments: state.comments ? state.comments[selectedPost.id] : state.comments
            });
    }
}

const mapDispatchToProps = (dispatch) =>
    ({
        onChangeScore: (id, value) => dispatch(changeScore(id, value)),
        onDeletePost: (id) => dispatch(deletePost(id)),
        onLoadComments: (parentId) => dispatch(loadComments(parentId)),
        onSaveComment: (comment) => dispatch(updateOrCreateComment(comment)),
        onDeleteComment: (commentId) => dispatch(deleteComment(commentId)),
        onChangeCommentScore: (id, value) => dispatch(changeCommentScore(id, value)),
        onLoadPost: (id) => dispatch(loadPost(id))
    });

const Container = connect(mapStateToProps, mapDispatchToProps)(PostDetail);

export default withRouter(Container);