import React, { Component } from 'react'



class ReadableApp extends Component {

  componentDidMount() {

  }

 submit(e) {

    this.props.onLoadCategories()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Readable App</h1>
        </header>
        <p className="App-intro">
          <h2>Categories</h2>

          <ul>


            {this.props.categories &&
              this.props
                .categories
                .map(category => (
                  <li key={category.name}>{category.name}
                  </li>
                ))
            }}

            </ul>
          <form onSubmit={this.submit()} >
            <button>test</button>
          </form>
        </p>
      </div>
    )
  }

}

export default ReadableApp

