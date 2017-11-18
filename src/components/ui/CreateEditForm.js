import React from 'react'
import { withRouter } from 'react-router-dom'

const CreateEditForm = (props) => {

    const { onCreatePost } = props;

    let _title, _body, _author;

    const submitPost = e => {
        e.preventDefault();
        onCreatePost({
            title: _title.value,
            body: _body.value
        })
    }



    return (


        <form onSubmit={submitPost}>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" ref={input => _title = input} required />
            <label htmlFor="body">Body</label>
            <textarea rows="4" cols="50" id="body" ref={
                input => _body = input} required>Enter your post here</textarea>
            <label htmlFor="author">Author</label>
            <input id="author" type="text" ref={input => _author = input} required />

            <button
                type="button"
                onClick={() => props.history.push('/')}
            >
                save
  </button>


        </form>
    )
}

export default CreateEditForm;