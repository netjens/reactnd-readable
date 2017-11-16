import { connect } from 'react-redux'
import ReadableApp from '../ui/ReadableApp'
import { withRouter } from 'react-router'
import { loadCategories } from '../../actions'

function mapStateToProps(state, props) {
    return ({
        categories: state.categories
    })
}

function mapDispatchToProps(dispatch) {
    
    
    return (//wenn klammer fehlt, interpretiert er rückgabe nicht als objekt, es sei denn geschweifte klammer ist auf selber ebene wie return anweisung
        {
        onLoadCategories: () => dispatch( loadCategories())
    })
}


const Container = connect(mapStateToProps, mapDispatchToProps)(ReadableApp)

export default withRouter(Container)