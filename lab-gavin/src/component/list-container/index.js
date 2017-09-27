import React from 'react';
import './_list-container.scss';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: this.props.notes.map(item => <li key={item.id}><h2>{item.title}:</h2> {item.content} <button onClick={() => this.props.handleNoteDelete(item)}>Delete</button></li>),
    };


  }




  render() {
    return (
      <div className="note-list">
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
