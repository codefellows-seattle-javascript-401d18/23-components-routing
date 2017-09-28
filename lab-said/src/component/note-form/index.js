import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      editing: false,
      completed: false,
      content:'',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
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

  // handleSubmitDelete(e) {
  //   e.preventDefault();
  //   this.props.handleNoteDelete(this.state.note);
  // }

  render() {
    return (
      <form
        className="note-form"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <button type="submit">Add Note</button>
        {/*<button type="submit">Delete Note</button>*/}
      </form>
    );
  }
}

export default NoteForm;
