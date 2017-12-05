import React from 'react'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import ThumbsDown from 'react-icons/lib/ti/thumbs-down'
import Delete from 'react-icons/lib/ti/times'
import Edit from 'react-icons/lib/ti/edit'
import Detail from 'react-icons/lib/ti/zoom-in-outline'
import { Link } from 'react-router-dom'

import '../../stylesheets/PostList.css'
import C from '../../constants'

const PostRow = (props) => {
    const { post, onChangeScore, onDeletePost } = props;
    const date = new Date(post.timestamp);
    const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    const detailLink = post.category + "/" + post.id;
    return (
        <tr className="postRow">
            <td>{post.title}</td>
            <td>{post.author}</td>
            <td>{post.commentCount}</td>
            <td>{post.voteScore}</td>
            <td><ThumbsUp onClick={() => onChangeScore(post.id, C.VOTE_UP)} className="thumbsUp" />
                <ThumbsDown onClick={() => onChangeScore(post.id, C.VOTE_DOWN)} className="thumbsDown" /></td>
            <td>{formattedDate}</td>
            <td>{post.category}</td>
            <td>  <Link to={{
                pathname: '/edit',
                post: post
            }}><Edit /></Link></td>
            <td><Link to={{ pathname: detailLink, post: post }}><Detail /></Link></td>
            <td><Delete onClick={() => onDeletePost(post.id)} className="delete" /></td>

        </tr>
    );
}

export default PostRow;
