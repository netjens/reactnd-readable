import React, { Component } from 'react'


import C from '../../constants'
import { NavLink, Link } from 'react-router-dom'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import ThumbsDown from 'react-icons/lib/ti/thumbs-down'
import Delete from 'react-icons/lib/ti/times'
import Edit from 'react-icons/lib/ti/edit'
//import '../../stylesheets/PostList.css';

class PostDetail extends Component {

    render(){
        console.log("post=" + JSON.stringify(this.props.post));
        const post = this.props.post;
        const{title, author, voteScore, timestamp, body} = this.props.post;
        const {onDeletePost, onChangeScore} = this.props;
        return (
        <div>
         <div> 
              <h1>{title} </h1>
             <p>by {author} on {getFormattedDate(timestamp)}</p>
             <p>Vote: {voteScore} </p>
             <p>{body}</p>
        </div>
        <div>
            <p>
            <ThumbsUp onClick={() => onChangeScore(post.id, C.VOTE_UP)} className="thumbsUp" />
            <ThumbsDown onClick={() => onChangeScore(post.id, C.VOTE_DOWN)} className="thumbsDown" />
            <Link to={{
                pathname: '/edit',
                post: post
            }}><Edit /></Link>
            <Delete onClick={() => this.onClickDelete(post.id)} className="delete" />
            </p>
        </div>
        </div>
        )
    }

     onClickDelete = (id) => {
        this.props.onDeletePost(id);
        this.props.history.push('/');
     }

    

}



function getFormattedDate(timestamp){
    
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString() + " at " + date.toLocaleTimeString();
    return formattedDate;
}

export default PostDetail;