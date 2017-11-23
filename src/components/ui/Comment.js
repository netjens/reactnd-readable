import React from 'react'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import ThumbsDown from 'react-icons/lib/ti/thumbs-down'
import Delete from 'react-icons/lib/ti/times'
import Edit from 'react-icons/lib/ti/edit'
import '../../stylesheets/PostDetail.css'
import C from '../../constants'


const Comment = (props) => {
    const { author, timestamp, voteScore, body,id } = props.comment;
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();

    return (

        <div>
            <p className="text-grey">by {author} on {formattedDate}</p>
            <p>Vote: {voteScore}
            </p>
            <p>{body}</p>
            <p>
                <ThumbsUp
                    onClick={() => props.onChangeCommentScore(id, C.COMMENT_VOTE_UP)}
                    className="thumbsUp" />
                <ThumbsDown
                    onClick={() => props.onChangeCommentScore(id, C.COMMENT_VOTE_DOWN)}
                    className="thumbsDown" />
                <Edit onClick={() => props.openModal(C.EDIT, props.comment)} className='edit' />
                <Delete onClick={() => props.onDeleteComment(id)} className="delete" />
            </p>
        </div>
    );
}

export default Comment;
