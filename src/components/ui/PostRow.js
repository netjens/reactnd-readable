import React from 'react'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import ThumbsDown from 'react-icons/lib/ti/thumbs-down'
import '../../stylesheets/PostList.css'
import C from '../../constants'

const PostRow = (props) => {
    const {id, title, author, commentCount, voteScore,onChangeScore,rowIndex } = props;
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{commentCount}</td>
            <td>{voteScore}</td>
            <td><ThumbsUp onClick={() => onChangeScore(id,C.VOTE_UP)} className="thumbsUp"/></td>
            <td><ThumbsDown onClick={() => onChangeScore(id,C.VOTE_DOWN)} className="thumbsDown"/></td>

        </tr>
    );
}

export default PostRow;
