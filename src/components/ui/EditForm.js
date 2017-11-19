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

        console.log("in handleChange: " + event.target.name + "..." + event.target.value);
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    render() {
        return (


            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />

                </div>
                <div> <label htmlFor="body">Body</label>
                    <textarea rows="4" cols="50" name="body" className="body" value={this.state.body} onChange={this.handleChange} required /></div>
                <div>
                    <label htmlFor="author">Author</label>

                    <input name="author" type="text" value={this.state.author} disabled required >

                    </input>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select name="category" value={this.state.category} disabled>
                        {this.props.categories.map(category => (
                        <option key={category.name} value={category.name}>{category.name}</option>
                    ))}

                    
                    </select>

                </div>
                <button>save</button>
            </form>
        )
    }
}

export default EditForm;