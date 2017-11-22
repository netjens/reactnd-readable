/*import React from 'react'
import Modal from 'react-modal'
import '../../stylesheets/PostDetail.css'

class CreateEditComment extends React.Component {
    constructor(props) {
        super(props);
        console.log("inCreateComment" + JSON.stringify(props));
       

        this.state = {
            modalOpen : false,
            id:null,
            body: null,
            author: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSaveComment({
            id: this.state.id,
            title: this.state.author,
            body: this.state.body
        });
        this.closeModal();
    }

    closeModal() {
        this.setState(() => ({
            modalOpen : false,
            id:null,
            body: null,
            author: null
        }))
      }


    render() {
        return (
            <Modal
                className='modal'
                overlayClassName='overlay'
                isOpen={true}
                contentLabel='Modal'>

                <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="author">Author</label>
                    <input name="author" type="text" value={this.state.author} disabled required></input>
                </div>
                <div>

                    <label htmlFor="body">Body</label>
                    <textarea
                        rows="4"
                        cols="50"
                        name="body"
                        className="body"
                        value={this.state.body}
                        onChange={this.handleChange}
                        required/>
                </div>
                <div><button>save</button></div>
                </form>
            </Modal>

        );
    }
}

export default CreateEditComment;
*/