import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-container">
        <NoteForm app={this.props.app}/>
        <NoteList app={this.props.app}/>
      </div>
    )
  }
}

export default DashboardContainer
