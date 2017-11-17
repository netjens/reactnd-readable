import { PropTypes } from 'react'
import React, {Component} from 'react'
import PostRow from './PostRow'

class PostList extends Component {

 componentWillMount() {
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
                        <th>Current score</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.posts.map((post,rowIndex)=>
                        <PostRow key={rowIndex}  {...post} {...this.props} />
                    )}
                </tbody>
            </table>
        </div>
        )
    }
}

export default PostList