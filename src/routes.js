import React from 'react'
import ReadableApp from './components/containers/ReadableApp'
import { BrowserRouter, Route } from 'react-router-dom'

const routes = (
    <BrowserRouter>
        <Route exact path="/" component={ReadableApp} />

    </BrowserRouter>
)

export default routes 