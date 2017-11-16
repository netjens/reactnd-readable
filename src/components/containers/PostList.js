import { connect } from 'react-redux'
import { loadPosts } from '../../actions'

const mapStateToProps = (state, props) =>
({
    posts: state.allPosts
})

function mapDispatchToProps(dispatch) {
    
    
    return (//wenn klammer fehlt, interpretiert er rückgabe nicht als objekt, es sei denn geschweifte klammer ist auf selber ebene wie return anweisung
        {
        onLoadPosts: () => dispatch( loadPosts())
    })
}

const Container = connect(mapStatetoProps)(PostList)

export default withRouter(Container)