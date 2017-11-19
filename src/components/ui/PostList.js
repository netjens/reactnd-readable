import { PropTypes } from 'react'
import React, { Component } from 'react'
import PostRow from './PostRow'
import Order from 'react-icons/lib/ti/arrow-unsorted'
import C from '../../constants'
import { Link } from 'react-router-dom'
import '../../stylesheets/PostList.css';

class PostList extends Component {

    state = {
        orderDir: null,
        orderBy: null
    }

    componentWillMount() {
    console.log("filter=" + this.state.filter)
    this.props.onLoadCategories();
        this
            .props
            .onLoadPosts(this.props.selectedCategory);
        this.onOrderBy("voteScore");

    }


    onOrderBy(by) {
        const { orderBy, orderDir } = this.state;
        let newDir;
        if (orderBy == null || orderBy !== by) {
            newDir = C.ORDER_UP; //initally always ascending
        } else {

            newDir = (orderDir === C.ORDER_UP)
                ? C.ORDER_DOWN
                : C.ORDER_UP;
        }
        this.setState({ orderDir: newDir, orderBy: by });
        this
            .props
            .onSort(this.props.posts, by, newDir);

    }

    render() {
        return (
            <div>
                <h2>Categories</h2>
                <ul>
                    {this.props.categories &&
                        this.props
                            .categories
                            .map(category => (
                                <li key={category.name}><Link to="/{category.path}">{category.name}</Link>
                                </li>
                            ))
                    }
                </ul>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Number of commments</th>
                            <th>Current score<Order className="order" onClick={() => this.onOrderBy("voteScore")} /></th>
                            <th>vote</th>
                            <th>Date<Order className="order" onClick={() => this.onOrderBy("timestamp")} /></th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this
                            .props
                            .posts
                            .map((post, rowIndex) => <PostRow key={rowIndex} post={post} {...this.props} />)}
                    </tbody>
                </table>
                <p>
                <Link 
                        to="/create"
                       >Add Post</Link></p>
            </div>
        )
    }
}

export default PostList