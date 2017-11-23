import React from 'react'

const CreateForm = (props) => {

    const { onCreatePost, categories } = props;
    console.log("props=" + JSON.stringify(props))
    let _title, _body, _author, _category;

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
        <div className="outer-form-container">
        <div className="form-header">
            <h2>Create new Post</h2>
        </div>
        <div className="form-container">
            <form onSubmit={submitPost}>
                <p>
                    <label className="text-grey" htmlFor="title">Title</label>
                    <input className="input-field" id="title" type="text" ref={input => _title = input} required />
                </p>
                <p> <label className="text-grey" htmlFor="body">Text</label>
                    <textarea className="input-field" rows="4" cols="40" id="body" ref={
                        input => _body = input} required></textarea>
                </p>
                <p>
                    <label className="text-grey" htmlFor="author">Author</label>

                    <input className="input-field" id="author" type="text" ref={input => _author = input} required />
                </p>
                    
                <p>
                    <label className="text-grey" htmlFor="category">Category</label>
                    <select className="input-field" id="category" ref={input => _category = input}>
                        {categories.map(category => (
                            <option key={category.name} value={category.name}>{category.name}</option>
                        ))

                        }
                    </select>

                </p>
                <button className="button">save</button>
            </form>
        </div>
        </div>
    )
}

export default CreateForm;