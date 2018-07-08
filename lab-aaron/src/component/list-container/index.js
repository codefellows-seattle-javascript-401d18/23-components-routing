import React from 'react';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedTitle: '',
      updatedContent: '',
      noteList:
      this.props.notes.map(item =>
        <li key={item.id}>
          <h2>{item.title}:</h2>{item.content}
          <button onClick={() => this.props.handleNoteDelete(item)}>Delete</button>
          {
          }
          <button onDoubleClick={() => this.props.handleNoteUpdate(item)}>Update</button>
        </li>
      ),
    };
  }

  render() {
    return (
      <div className="note-list">
        {this.state.noteList ?
          <ul>
            {this.state.noteList}
          </ul> :
          <h2>You have no notes</h2>
        }
      </div>
    );
  }
}

export default ListContainer;
