import { connect } from 'react-redux'
import ReadableApp from '../ui/ReadableApp'
import { withRouter } from 'react-router'
import {loadCategories} from '../../actions'

const mapStatetoProps = (state, props) =>
    ({
        categories: state.categories
    })


const mapDispatchToProps = dispatch =>
    ({
        onLoadCategories() {
            dispatch(loadCategories())
        }

    })

const Container = connect(mapStatetoProps,mapDispatchToProps)(ReadableApp)

export default withRouter(Container)