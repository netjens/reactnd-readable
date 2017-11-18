import { connect } from 'react-redux'
import { loadPosts,changeScore,deletePost,order,sortPosts} from '../../actions'
import { loadCategories } from '../../actions'
import PostList from '../ui/PostList'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) =>
({
    posts: state.allPosts,
    order: state.order,
    categories: state.categories
});

const mapDispatchToProps = (dispatch) =>
     (//wenn klammer fehlt, interpretiert er rückgabe nicht als objekt, es sei denn geschweifte klammer ist auf selber ebene wie return anweisung
        {
        onLoadPosts: () => dispatch( loadPosts()),
        onChangeScore: (id,value) => dispatch(changeScore(id,value)),
        onDeletePost: (id) => dispatch(deletePost(id)),
        onSort: (posts,by,dir) => dispatch(sortPosts(posts,by, dir)),
         onLoadCategories: () => dispatch( loadCategories())
    }
);


const Container = connect(mapStateToProps,mapDispatchToProps)(PostList);

export default withRouter(Container)