

import { connect } from 'react-redux'
import {createPost} from '../../actions'
import CreateEditForm from '../ui/CreateEditForm'

import PostList from '../ui/PostList'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) =>
({
    post : state.post
});

const mapDispatchToProps = (dispatch) =>
     (//wenn klammer fehlt, interpretiert er rückgabe nicht als objekt, es sei denn geschweifte klammer ist auf selber ebene wie return anweisung
        {
        onCreatePost: () => dispatch( createPost()),
    }
);


const Container = connect(mapStateToProps,mapDispatchToProps)(CreateEditForm);

export default withRouter(Container)