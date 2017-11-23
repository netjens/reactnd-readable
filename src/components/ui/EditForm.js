import React from 'react'



class EditForm extends React.Component {


    constructor(props) {
        super(props);
        const post = props.location.post ? this.props.location.post : {
            id: '',
            title: '',
            body: '',
            author: '',
            category: ''
        };

        this.state = {
            id: post.id,
            title: post.title,
            body: post.body,
            author: post.author,
            category: post.category
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(e) {
        e.preventDefault();
        this.props.onEditPost({
            id: this.state.id,
            title: this.state.title,
            body: this.state.body
        });
        this.props.history.push('/');
    }

    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    render() {
        return (

            <div className="outer-form-container">
            <div className="form-header">
            <h2>Edit Post</h2>
        </div>
        <div className="form-container">
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label className="text-grey" htmlFor="title">Title</label>
                    <input className="input-field" type="text" name="title" value={this.state.title} onChange={this.handleChange} required />

                </p>
                <p> <label className="text-grey" htmlFor="body">Text</label>
                    <textarea className="input-field" rows="4" cols="50" name="body" className="body" value={this.state.body} onChange={this.handleChange} required />
                </p>
                <p>
                    <label htmlFor="author" className="text-grey">Author</label>

                    <input className="input-field" name="author" type="text" value={this.state.author} disabled required >

                    </input>
                </p>
                <p>
                    <label className="text-grey" htmlFor="category">Category</label>
                    <select className="input-field" name="category" value={this.state.category} disabled>
                        {this.props.categories.map(category => (
                        <option key={category.name} value={category.name}>{category.name}</option>
                    ))}

                    
                    </select>

                </p>
                <button className="button">save</button>
            </form>
            </div>
            </div>
        )
    }
}

export default EditForm;