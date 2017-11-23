import React, { Component } from 'react'
import PostList from '../containers/PostList'
import CreateForm from '../containers/CreateForm'
import EditForm from '../containers/EditForm'
import { Route } from 'react-router-dom'

class ReadableApp extends Component {





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable App</h1>
        </header>
        <Route exact path="/" compontent={PostList} />
        <Route path="/create" render={(props) =>(<CreateForm />)} />
        <Route path="/edit" render={(props)=>(<EditForm />)} />
      </div>
    )
  }

}

export default ReadableApp

