import { PropTypes } from 'react'
import React, {Component} from 'react'
import PostRow from './PostRow'

class PostList extends Component {

 componentWillMount() {
     console.log(this.props)
    this.props.onLoadPosts()
  }

    render(){
        return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Number of commments</th>
                        <th>current score</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.posts.map((post,i)=>
                        <PostRow key={i} {...post} />
                    )}
                </tbody>
            </table>
        </div>
        )
    }
}

export default PostList