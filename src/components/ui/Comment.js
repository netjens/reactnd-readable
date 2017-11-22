import React from 'react'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import ThumbsDown from 'react-icons/lib/ti/thumbs-down'
import Delete from 'react-icons/lib/ti/times'
import Edit from 'react-icons/lib/ti/edit'
import {Link} from 'react-router-dom'

import C from '../../constants'

const Comment = (props) => {
    const {author, timestamp, voteScore, body} = props.comment;
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();

    return (

        <div>
            <p>by {author}
                on {formattedDate}</p>
            <p>Vote: {voteScore}
            </p>
            <p>{body}</p>
            <p>
            <button onClick={() => props.openModal(props.comment)} className='icon-btn'>
                          <Edit />
                        </button>
            </p>
        </div>
    );
}

export default Comment;
