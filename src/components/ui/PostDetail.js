import React, {Component} from 'react'
import Comment from './Comment'
import C from '../../constants'
import {NavLink, Link} from 'react-router-dom'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import ThumbsDown from 'react-icons/lib/ti/thumbs-down'
import Delete from 'react-icons/lib/ti/times'
import Edit from 'react-icons/lib/ti/edit'
import '../../stylesheets/PostDetail.css'
import Modal from 'react-modal'

class PostDetail extends Component {

    componentDidMount() {
        this
            .props
            .onLoadComments(this.props.post.id);
    }

    state = {
        modalOpen: false,
        comment: {
            body: null,
            author: null
        }
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render() {
        const post = this.props.post;
        const {title, author, voteScore, timestamp, body} = this.props.post;
        const {onDeletePost, onChangeScore} = this.props;
        return (
            <div>
                <div>
                    <h1>{title}
                    </h1>
                    <p>by {author}
                        on {getFormattedDate(timestamp)}</p>
                    <p>Vote: {voteScore}
                    </p>
                    <p>{body}</p>
                </div>
                <div>
                    <p>
                        <ThumbsUp
                            onClick={() => onChangeScore(post.id, C.VOTE_UP)}
                            className="thumbsUp"/>
                        <ThumbsDown
                            onClick={() => onChangeScore(post.id, C.VOTE_DOWN)}
                            className="thumbsDown"/>
                        <Link
                            to={{
                            pathname: '/edit',
                            post: post
                        }}><Edit/></Link>
                        <Delete onClick={() => this.onClickDelete(post.id)} className="delete"/>
                    </p>
                </div>
                <div>
                    {this.props.comments && this
                        .props
                        .comments
                        .map((comment, rowIndex) => <Comment key={rowIndex} comment={comment} openModal={this.openModal}/>)}
                </div>
                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={this.state.modalOpen}
                    contentLabel='Modal'>

                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="author">Author</label>
                            <input
                                name="author"
                                type="text"
                                value={this.state.comment.author}
                                disabled
                                required></input>
                        </div>
                        <div>

                            <label htmlFor="body">Body</label>
                            <textarea
                                rows="4"
                                cols="50"
                                name="body"
                                className="body"
                                value={this.state.comment.body}
                                onChange={this.handleChange}
                                required/>
                        </div>
                        <div>
                            <button>save</button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }

    onClickDelete = (id) => {
        this
            .props
            .onDeletePost(id);
        this
            .props
            .history
            .push('/');
    }
    handleChange(event) {
        console.log("in handleChange");
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({...this.state,comment:{...this.state.comment,[name]:value}});
        console.log("state after setstate:" + JSON.stringify(this.state));
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = this.state.comment;
        console.log("coment:" + JSON.stringify(comment));
        if (comment.id) {
            this
                .props
                .onUpdateComment({id: comment.id, title: comment.author, body: comment.body});
        }
        this.closeModal();
    }

    closeModal() {
        this.setState(() => ({modalOpen: false, id: null, body: null, author: null}))
    }

    openModal = (comment) => {
        if (comment == undefined) {
            comment = {};
        }
        this.setState(() => ({modalOpen: true, comment}))
    }

}

function getFormattedDate(timestamp) {

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString() + " at " + date.toLocaleTimeString();
    return formattedDate;
}

export default PostDetail;