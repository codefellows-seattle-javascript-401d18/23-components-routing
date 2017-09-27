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
  noteDelete(title){
    console.log(this.props.app.state.notes,'heloooooo');
    let z = this.props.app.state.notes;
    z = z.filter(note => note.title !== note.title);
    this.props.app.setState({ notes: z });
  }

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
