import React, { Component } from 'react'
import Comment from './Comment'
import C from '../../constants'
import { Link } from 'react-router-dom'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import ThumbsDown from 'react-icons/lib/ti/thumbs-down'
import Delete from 'react-icons/lib/ti/times'
import Edit from 'react-icons/lib/ti/edit'
import '../../stylesheets/PostDetail.css'
import Modal from 'react-modal'
import Create from 'react-icons/lib/ti/document-add'

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
            author: null,
            editMode: null
        }
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);



    }

    render() {
        const post = this.props.post;
        const { title, author, voteScore, timestamp, body, commentCount } = this.props.post;
        const {  onChangeScore } = this.props;
        const disabled = this.state.comment.editMode === C.CREATE ? false : true;
        return (
            <div>
                <div className="outer-form-container">
                    <div className="form-header">

                        <h1>{title}
                        </h1>
                    </div>
                    <div className="form-container">
                        <p className="text-grey">by {author}&nbsp;on&nbsp;{getFormattedDate(timestamp)}</p>
                        <p>Vote: {voteScore}
                        </p>
                       
                    
                        <p>{body}</p>

                        <p>
                            <ThumbsUp
                                onClick={() => onChangeScore(post.id, C.VOTE_UP)}
                                className="thumbsUp" />
                            <ThumbsDown
                                onClick={() => onChangeScore(post.id, C.VOTE_DOWN)}
                                className="thumbsDown" />
                            <Link
                                to={{
                                    pathname: '/edit',
                                    post: post
                                }}><Edit /></Link>
                            <Create onClick={() => this.openModal(C.CREATE)} className="edit" />
                            <Delete onClick={() => this.onClickDelete(post.id)} className="delete" />
                        </p>


                    </div>
                    </div>
                    <div className="outer-form-container">
                    <div className="form-header">
                        <h2>Comments <span className="counter">{commentCount}</span></h2>
                    </div>
                    <div className="form-container">
                        {this.props.comments && this
                            .props
                            .comments
                            .map((comment, rowIndex) =>

                                <ul className="comment-ul"> 
                                    <li className="comment-li" key={rowIndex}>                           
                                <Comment  comment={comment} openModal={this.openModal}
                                    onDeleteComment={this.onClickDeleteComment}
                                    onChangeCommentScore={this.props.onChangeCommentScore} />
                                    </li>
                                </ul>
                            )}
                    </div>
                    </div>


                    <Modal
                        className="modal"
                        overlayClassName='overlay'
                        isOpen={this.state.modalOpen}
                        contentLabel='Modal'>
                        <div>
                        <form onSubmit={this.handleSubmit}>
                            <p>
                                <label className="text-grey" htmlFor="author">Author</label>
                                <input className="input-field"
                                    name="author"
                                    type="text"
                                    value={this.state.comment.author}
                                    onChange={this.handleChange}
                                    disabled={disabled}
                                    required></input>
                            </p>

                            <p>

                                <label className="text-grey" htmlFor="body">Comment Text</label>
                                <textarea className="input-field"
                                    rows="4"
                                    cols="40"
                                    name="body"
                                    value={this.state.comment.body}
                                    onChange={this.handleChange}
                                    required />
                            </p>
                            <p>
                                <button className="button">save</button>
                                <button className="button" onClick={this.closeModal}>cancel</button>
                            </p>
                        </form>
                    </div>
                    </Modal>
                    <p><Link to="/"><button className="button">back</button></Link></p>
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

    onClickDeleteComment = (id)=>{
                this.props.onDeleteComment(id);
       this.props.onLoadPost(this.props.post.id);//to update the vote score from post
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({...this.state,comment:{...this.state.comment,[name]:value}});
    }

    handleSubmit(e) {
                    e.preventDefault();
                let comment = this.state.comment;
        comment.parentId = this.props.post.id;
            this
                .props
                .onSaveComment(comment);

        this.closeModal();
        this.props.onLoadPost(this.props.post.id);//to update the vote score from post
    }

    closeModal() {
                    this.setState(() => ({ modalOpen: false, id: null, body: null, author: null }))
                }

                openModal = (editMode,comment) => {
        if (comment === undefined) {
                    comment = {};
                }
        comment.editMode = editMode;

        this.setState(() => ({modalOpen: true, comment}))
    }

}

function getFormattedDate(timestamp) {

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString() + " at " + date.toLocaleTimeString();
    return formattedDate;
}

export default PostDetail;