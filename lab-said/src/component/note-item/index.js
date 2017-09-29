import React from 'react';
import NoteForm from '../note-form';

let renderIf = (a, b) => a ? b : undefined;

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };
  }

  render(){
    let {note} = this.props;
    return (
      <li onDoubleClick={() => this.setState(notestate => ({editing: !this.state.editing}))}>
        {renderIf(!this.state.editing,
          <div>
            <button onClick={() => this.props.noteRemove(note)}>
              delete
            </button>
            <p> title: {note.title} </p>
          </div>)}

        {renderIf(this.state.editing,
          <NoteForm
            note={note}
            submitTitle='update note'
            handleSubmit={(data) => {
              data.id = note.id;
              this.props.noteUpdate(data);
            }} />)}
      </li>
    );
  }
}

export default NoteItem;
