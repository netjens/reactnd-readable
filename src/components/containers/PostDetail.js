import { connect } from 'react-redux'
//import {updatePost} from '../../actions'
import PostDetail from '../ui/PostDetail'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) =>
({
    
});

const mapDispatchToProps = (dispatch) =>
     (//wenn klammer fehlt, interpretiert er rückgabe nicht als objekt, es sei denn geschweifte klammer ist auf selber ebene wie return anweisung
        {
       
    }
);


const Container = connect(mapStateToProps,mapDispatchToProps)(PostDetail);

export default withRouter(Container)