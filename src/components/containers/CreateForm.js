

import { connect } from 'react-redux'
import {createPost} from '../../actions'
import CreateForm from '../ui/CreateForm'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) =>
({
    categories: state.categories
});

const mapDispatchToProps = (dispatch) =>
     (//wenn klammer fehlt, interpretiert er rückgabe nicht als objekt, es sei denn geschweifte klammer ist auf selber ebene wie return anweisung
        {
        onCreatePost: (post) => dispatch( createPost(post))
    }
);


const Container = connect(mapStateToProps,mapDispatchToProps)(CreateForm);

export default withRouter(Container)