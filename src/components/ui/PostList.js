import React, { Component } from 'react'
import PostRow from './PostRow'
import Order from 'react-icons/lib/ti/arrow-unsorted'
import C from '../../constants'
import { NavLink, Link } from 'react-router-dom'
import '../../stylesheets/PostList.css';

class PostList extends Component {



    componentDidMount() {
        this.props.onLoadCategories();
        this
            .props
            .onLoadPosts(this.props.selectedCategory);

    }




    onOrderBy(newBy) {
        const {  dir,by } = this.props.order;
        let newDir;
        if (by == null || by !== newBy) {
            newDir = C.ORDER_UP; //initally always ascending
        } else {

            newDir = (dir === C.ORDER_UP)
                ? C.ORDER_DOWN
                : C.ORDER_UP;
        }
        this
            .props
            .onSort( newBy, newDir);

    }


    componentWillReceiveProps(nextProps) {
        let nextCategory = nextProps.match.params.category;

        if (this.props.selectedCategory !== nextCategory) {
            //required because otherwise no render occurs after url change by link-component
            this.props.onLoadPosts(nextCategory);
        }



    }


    render() {
        return (
            <div className="outer-div">
                <div className="list-card list-margin panel category-panel">
                <h2>Categories</h2>
                <ul>
                     <li key="all"><NavLink to={"/"}>All</NavLink></li>
                    {this.props.categories &&
                        this.props
                            .categories
                            .map(category => (
                                <li key={category.name}><NavLink to={category.name}>{category.name}</NavLink>
                                </li>
                            ))
                    }
                </ul>
                </div>
                <div className="list-card list-margin">
                <table>
                    <thead className="teal">
                        <tr className="list-padding-16">
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
                </div>
                <p>
                    <Link
                        to="/create"
                    ><button className="button">Add Post</button></Link></p>
            </div>
        )
    }
}

export default PostList