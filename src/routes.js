import React from 'react'
import { App} from './components/ui/App'
import { BrowserRouter, Route } from 'react-router-dom'

const routes = (
    <BrowserRouter>
        <Route exact path="/" component={App} />

    </BrowserRouter>
)

export default routes 