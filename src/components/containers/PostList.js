import { connect } from 'react-redux'
import { loadPosts,changeScore,deletePost,order,sortPosts,updatePost} from '../../actions'
import { loadCategories } from '../../actions'
import PostList from '../ui/PostList'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) =>
{
    console.log("in mapstatetoprops" + JSON.stringify(props.match.params));
return ({
    posts: state.allPosts,
    order: state.order,
    categories: state.categories,
    selectedCategory: props.match.params.category
});
}

const mapDispatchToProps = (dispatch) =>
     (//wenn klammer fehlt, interpretiert er rückgabe nicht als objekt, es sei denn geschweifte klammer ist auf selber ebene wie return anweisung
        {
        onLoadPosts: (selectedCategory) => dispatch( loadPosts(selectedCategory)),
        onChangeScore: (id,value) => dispatch(changeScore(id,value)),
        onDeletePost: (id) => dispatch(deletePost(id)),
        onSort: (posts,by,dir) => dispatch(sortPosts(posts,by, dir)),
         onLoadCategories: () => dispatch( loadCategories()),
         onEditPost: (post) => dispatch(updatePost(post))
    }
);


const Container = connect(mapStateToProps,mapDispatchToProps)(PostList);

export default withRouter(Container)