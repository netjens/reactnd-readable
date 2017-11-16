import React from 'react'

const PostRow = ({ title, author, commentCount, votedScore }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{commentCount}</td>
            <td>{votedScore}</td>
        </tr>
    );
}

export default PostRow;
