import React from 'react';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.notes.map(item => <li key={item.id}>{item.title}: {item.content} <button onClick={this.props.handleNoteDelete}>Delete</button></li>),
    };
    // this.deleteNote = this.deleteNote.bind(this);

  }

  // handleDelete(e){
  //   // e.preventDefault();
  //   this.deleteNote(this.title);
  // }

  // deleteNote(note){
  //   let z = this.state.noteList;
  //   z = z.filter(note => note.title !== note.title);
  //   this.setState({ noteList: z });
  // }

  render() {
    return (
      <div className="expense-list">
        {this.state.noteList ?
          <ul>
            {this.state.noteList}
          </ul> :
          <h2>There are no notes</h2>
        }
      </div>
    );
  }
}

export default ListContainer;
