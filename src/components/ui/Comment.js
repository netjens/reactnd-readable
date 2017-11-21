import React from 'react'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import ThumbsDown from 'react-icons/lib/ti/thumbs-down'
import Delete from 'react-icons/lib/ti/times'
import Edit from 'react-icons/lib/ti/edit'
import {Link} from 'react-router-dom'

import '../../stylesheets/PostList.css'
import C from '../../constants'

const Comment = (props) => {
    const {author, timestamp, voteScore, body} = this.props.comment;
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    return (

        <div>
            <p>by {author}
                on {formattedDate(timestamp)}</p>
            <p>Vote: {voteScore}
            </p>
            <p>{body}</p>
        </div>
    );
}

export default Comment;
