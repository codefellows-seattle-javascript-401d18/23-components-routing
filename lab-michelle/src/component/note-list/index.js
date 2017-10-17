import React from 'react';

//basically a container for the notes so they can show up on the dash//
class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.notesArr.map(item => <li key={item.id}>{item.content}</li>),
    };
  }

  render() {
    return(
      <div className="note-list">
        {this.state.NoteList ?
          <ul>
            {this.state.NoteList} </ul>
          :
          <h2>No notes currently</h2>
        }
        </div>
    );
  }
}

//export
export default NoteList;
