import React from 'react';
import NoteCreateForm from '../note-form';
import NoteList from '../note-list';
import NoteItem from '../note-item';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-container">
        <NoteCreateForm app={this.props.app}/>
        <NoteList app={this.props.app}/>
      </div>
    );
  }
}

export default DashboardContainer;
