import React from 'react'

const CreateEditPost = (props) => {

    const {onCreatePost} = props;

    let _title, _body;

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
            <input id="title" type="text" ref={input => _title = input} required/>
            <label htmlFor="body">Body</label>
            <textarea rows="4" cols="50" id="body" ref={
                input=>_body = input} required>Enter your post here</textarea>
            <button>Save</button>
        </form>
    )

}

export default CreateEditPost;