import React, { Component } from 'react'
import PostList from './PostList'


class ReadableApp extends Component {



  componentWillMount() {
    this.props.onLoadCategories()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable App</h1>
        </header>
        <h2>Categories</h2>
        <ul>
          {this.props.categories &&
            this.props
              .categories
              .map(category => (
                <li key={category.name}>{category.name}
                </li>
              ))
          }
        </ul>
        <PostList />
      </div>
    )
  }

}

export default ReadableApp

