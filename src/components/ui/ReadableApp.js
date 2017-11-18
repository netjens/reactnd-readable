import React, { Component } from 'react'
import PostList from '../containers/PostList'
import CreateEditForm from '../containers/CreateEditForm'
import { Route } from 'react-router-dom'

class ReadableApp extends Component {





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable App</h1>
        </header>
        <Route exact path="/" render={ (props) =>(<PostList />)} />
        <Route path="/create" render={(props) =>(<CreateEditForm />)} />
      </div>
    )
  }

}

export default ReadableApp

