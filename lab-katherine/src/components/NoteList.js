import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      noteList: this.props.content,
    };
  }
  render() {
    console.log(this.props.content)
    return (
      <div className="note-list">
        {this.state.noteList ?
          <ul>
            {this.state.noteList.map(item => <li key={item.id}>{item.content}</li>)}
          </ul>
          :
          <h2>there are no notes</h2>
        }
      </div>
    );
  }
}
export default NoteList;
