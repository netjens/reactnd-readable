import React from 'react'
import { withRouter } from 'react-router-dom'

const CreateEditForm = (props) => {

    const { onCreatePost, categories } = props;
    console.log("props=" + JSON.stringify(props))
    let _title, _body, _author,_category;

    const submitPost = e => {
        console.log("in submit post");
        e.preventDefault();
        onCreatePost({
            title: _title.value,
            body: _body.value,
            author: _author.value,
            category: _category.value
        });
        props.history.push('/');
    }



    return (


        <form onSubmit={submitPost}>
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" ref={input => _title = input} required />
            </div>
            <div> <label htmlFor="body">Body</label>
                <textarea rows="4" cols="50" id="body" ref={
                    input => _body = input} required></textarea></div>
            <div>
                <label htmlFor="author">Author</label>

                <input id="author" type="text" ref={input => _author = input} required />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" ref={input=>_category = input}>
                    {categories.map(category => (
                        <option key={category.name} value={category.name}>{category.name}</option>
                    ))

                    }
                </select>

            </div>
            <button>save</button>
        </form>
    )
}

export default CreateEditForm;