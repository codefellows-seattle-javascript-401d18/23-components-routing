import './_note-updateform-container.scss';

import React from 'react';
import uuid from 'uuid/v1';

import NoteList from '../note-list';
import NoteForm from '../note-form';
import NoteItem from '../note-item';
let renderIf = (test, component) => test ? component : undefined;

class NoteUpdatFormContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showErrors: true,
    };

    this.noteUpdate = this.noteUpdate.bind(this);
  }

  noteRemove(note){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      }),
    }));
  }

  noteUpdate(note){
    console.log('note', note);
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id == note.id ? note : item;
      }),
    }));
  }

  render(){
    let {app} = this.props;
    return (
      <div className='noteupdateform-container'>

        <NoteList
          notes={app.state.notes} />
          noteRemove={this.noteRemove}
          noteUpdate={this.noteUpdate}

      </div>
    );
  }
}

export default NoteUpdatFormContainer;
