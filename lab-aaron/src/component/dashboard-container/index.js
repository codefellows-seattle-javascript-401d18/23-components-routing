import React from 'react';
import uuid from 'uuid/v4';
import NoteFormContainer from '../note-form-container';
import ListContainer from '../list-container';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
    this.noteDelete = this.noteDelete.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
  }
  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASHBOARD__', this.props.app.state);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, note],
    }));
  }

  noteDelete(note) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      }),
    }));
  }

  noteUpdate(note) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id === note.id ? note : item;
      }),
    }));
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Make a Note</h2>
        <NoteFormContainer
          handleNoteCreate={this.noteCreate}/>
        <ListContainer
          notes={this.props.app.state.notes}
          handleNoteDelete={this.noteDelete}
          handleNoteUpdate={this.noteUpdate}
        />
      </div>
    );
  }
}//stay away

export default DashboardContainer;
