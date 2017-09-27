import React from 'react';
import uuid from 'uuid/v4';
import NoteFormContainer from '../note-form-container';
import ListContainer from '../list-container';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
    this.noteDelete = this.noteDelete.bind(this);
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
  noteDelete(note){
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      }),
    }));
  }
  // let z = this.props.app.state.notes;
  // let newNotes = z.filter(note => note.title !== note.title);
  // console.log(newNotes, 'NEWNOTES');
  // this.props.app.setState({ notes: newNotes });
  // console.log(this.props.app.state.notes,'AFTERSETSTATE');

  render() {
    return (
      <div className="dashboard-container">
        <h2>We are in the dashboard</h2>
        <NoteFormContainer
        handleNoteCreate={this.noteCreate}/>
        <ListContainer
        notes={this.props.app.state.notes}
        handleNoteDelete={this.noteDelete}
        />
      </div>
    );
  }
}
export default DashboardContainer;
