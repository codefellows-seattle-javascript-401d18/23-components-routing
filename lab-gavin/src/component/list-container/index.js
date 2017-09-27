import React from 'react';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.notes.map(item => <li key={item.id}>{item.title}: {item.content} <button onClick={this.handleDelete}>Delete</button></li>),
    };
    this.deleteNote = this.deleteNote.bind(this);
  }

  handleDelete(e){
    // e.preventDefault();
    this.deleteNote(this.title);
  }

  deleteNote(title){
    let notes = this.state.noteList;
    notes = notes.filter(note => note.title !== title);
    this.setState({ notelist: notes });
  }

  render() {
    return (
      <div className="expense-list">
        {this.state.noteList ?
          <ul>
            {this.state.noteList}
          </ul> :
          <h2>There are no expenses</h2>
        }
      </div>
    );
  }
}

export default ListContainer;
