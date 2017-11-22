import React from 'react'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import ThumbsDown from 'react-icons/lib/ti/thumbs-down'
import Delete from 'react-icons/lib/ti/times'
import Edit from 'react-icons/lib/ti/edit'
import {Link} from 'react-router-dom'
import '../../stylesheets/PostDetail.css'


import C from '../../constants'

const Comment = (props) => {
    const {author, timestamp, voteScore, body} = props.comment;
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();

    return (

        <div>
            <p>by {author} on {formattedDate}</p>
            <p>Vote: {voteScore}
            </p>
            <p>{body}</p>
            <p>
            <button onClick={() => props.openModal(C.EDIT,props.comment)} className='icon-btn edit'>
                          <Edit />
                        </button>
            <Delete onClick={() => props.onDeleteComment(props.comment.id)} className="delete"/>
            </p>
        </div>
    );
}

export default Comment;
