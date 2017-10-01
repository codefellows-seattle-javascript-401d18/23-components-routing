import React from 'react';
import NoteCreateForm from '../note-create-form';

class Dashboard extends React.component {
  constructor(props) {
    super(props);
  }
  //no functions or anything because it's a container, we don't need to bind anything

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
export default Dashboard
