

import { connect } from 'react-redux'
import {updatePost} from '../../actions'
import EditForm from '../ui/EditForm'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) =>
({
    categories: state.categories
});

const mapDispatchToProps = (dispatch) =>
     (//wenn klammer fehlt, interpretiert er rückgabe nicht als objekt, es sei denn geschweifte klammer ist auf selber ebene wie return anweisung
        {
        onEditPost: (post) => dispatch( updatePost(post))
    }
);


const Container = connect(mapStateToProps,mapDispatchToProps)(EditForm);

export default withRouter(Container)