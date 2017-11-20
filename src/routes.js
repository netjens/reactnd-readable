import React from 'react'
import PostList from './components/containers/PostList'
import CreateEditForm from './components/containers/CreateEditForm'
import EditForm from './components/containers/EditForm'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const routes = (
    <BrowserRouter >
        <Switch> {/*router may have only one child element, thats the reason for the div here */}
        <Route exact path="/" component={PostList} />
     
     
        <Route path="/create" component={CreateEditForm} />
        <Route path="/edit" component={EditForm} />

           <Route  path="/:category" component={PostList} onChange={PostList} />
                 
        </Switch>


    </BrowserRouter>

)


export default routes