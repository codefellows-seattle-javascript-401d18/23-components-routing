import React from 'react';

class NoteFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNoteCreate(this.state);
  }

  render() {
    return (
      <form
        className="note-form"
        onSubmit = {this.handleSubmit}>

        <input
          type = "text"
          name = "content"
          placeholder = "Title"
          value = {this.state.title}
          onChange = {this.handleChange}/>
        <br/>

        <textarea
          type="text"
          name="content"
          placeholder="New Note"
          value={this.state.content}
          onChange={this.handleChange}/>

        <button type="submit">Add Note</button>
      </form>
    );
  }
}

export default NoteFormContainer;
