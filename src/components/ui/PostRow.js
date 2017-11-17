import React from 'react'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import ThumbsDown from 'react-icons/lib/ti/thumbs-down'
import '../../stylesheets/PostList.css'

const PostRow = (props) => {
    const {id, title, author, commentCount, voteScore,onChangeScore } = props;
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{commentCount}</td>
            <td>{voteScore}</td>
            <td><ThumbsUp onClick={() => onChangeScore(id,1)} className="thumbsUp"/></td>
            <td><ThumbsDown onClick={() => onChangeScore(id,-1)} className="thumbsDown"/></td>

        </tr>
    );
}

export default PostRow;
