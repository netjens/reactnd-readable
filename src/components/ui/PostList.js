import { PropTypes } from 'react'
import React, { Component } from 'react'
import PostRow from './PostRow'
import Order from 'react-icons/lib/ti/arrow-unsorted'
import C from '../../constants'

class PostList extends Component {

    state = {
        orderDir: null,
        orderBy: null
    }

    componentWillMount() {

    this.props.onLoadCategories();
        this
            .props
            .onLoadPosts();
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
        console.log("render aufgerufen von derliste");
        return (
            <div>
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
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Number of commments</th>
                            <th>Current score<Order className="order" onClick={() => this.onOrderBy("voteScore")} /></th>

                            <th>Date<Order className="order" onClick={() => this.onOrderBy("timestamp")} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this
                            .props
                            .posts
                            .map((post, rowIndex) => <PostRow key={rowIndex} {...post} {...this.props} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PostList