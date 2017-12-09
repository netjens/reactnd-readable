import { connect } from 'react-redux'
import { loadPosts,changeScore,deletePost ,updatePost, sortPosts} from '../../actions'
import { loadCategories } from '../../actions'
import PostList from '../ui/PostList'
import { withRouter } from 'react-router'
import C from '../../constants'

const mapStateToProps = (state, props) =>
{
return ({
    order: state.order,
    posts: sort(state.allPosts,state.order.by,state.order.dir),
    categories: state.categories,
    selectedCategory: props.match.params.category
});
}

const mapDispatchToProps = (dispatch) =>
     (
        {
        onLoadPosts: (selectedCategory) => dispatch( loadPosts(selectedCategory)),
        onChangeScore: (id,value) => dispatch(changeScore(id,value)),
        onDeletePost: (id) => dispatch(deletePost(id)),
         onLoadCategories: () => dispatch( loadCategories()),
         onEditPost: (post) => dispatch(updatePost(post)),
         onSort : (by, dir) => dispatch(sortPosts(by,dir))
    }
);

const sort = (objects,by,dir)=>{
    const compResult = (dir === C.ORDER_UP)
           ? 1
           : -1;
   
       const compare = (a, b) =>{
           if (a[by] > b[by]) {
               return compResult;
           }
           if (a[by] < b[by]) {
               return compResult * -1;
           }
           return 0
       }
       return objects.sort(compare);
   
   }





const Container = connect(mapStateToProps,mapDispatchToProps)(PostList);




export default withRouter(Container)