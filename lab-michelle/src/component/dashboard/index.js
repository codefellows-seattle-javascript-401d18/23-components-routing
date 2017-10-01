import React from 'react';
import NoteList from '../note-list';
import NoteCreateForm from '../note-create-form';
import uuid from 'uuid/v4';

class Dashboard extends React.component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
  }

  //check to see what app state is from dash//
  componentDidUpdate() {
    console.log('__APPSTATEFROMDASH__', this.props.app.state);
  }

  //Refactored my "notemaker" fx in app to be here
  noteCreate(note) {
    note.id= uuid();
    note.editing= false;
    note.completed= false;
    note.content= '';
    this.props.app.setState(prevState => ({
      notesArr: [...prevState.notesArr, note],
    })
  );
  }

  render() {
    return (
      <div className ="dashboard">
        <h2>Hello from the Dashboard</h2>
        <NoteCreateForm app={this.props.app}/>
      </div>
    );
  }
}

//Export
export default Dashboard;
