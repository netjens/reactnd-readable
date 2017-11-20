import React, { Component } from 'react'


import C from '../../constants'
import { NavLink, Link } from 'react-router-dom'
//import '../../stylesheets/PostList.css';

class PostDetail extends Component {

    render(){
        console.log("post=" + JSON.stringify(this.props.post));
        const{title, author, voteScore, timestamp, body} = this.props.post;
        return (
         <div> 
              <h1>{title} {voteScore}</h1>
             <p>by {author} on {getFormattedDate(timestamp)}</p>
             <p>{body}</p>
        </div>
        )
    }

}



function getFormattedDate(timestamp){
    
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString() + " at " + date.toLocaleTimeString();
    return formattedDate;
}

export default PostDetail;