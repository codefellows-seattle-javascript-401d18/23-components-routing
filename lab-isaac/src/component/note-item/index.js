import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.app.state.notesArray,
    };
  }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      notesArray: prevState.notesArray.filter(note => note.id !== id),
    }));
  }

  render() {
    return(
      <div>
        {this.state.items.length ?
          this.state.items.map(note =>
            <li className="note-item" key={note.id}>
              {note.content}
              <button onClick={event => this.handleDelete(event, note.id)}>delete</button>
            </li>) :
          <h3>There are no notes to be displayed yet!!!</h3>}
      </div>
    );
  }
}

export default NoteItem;
