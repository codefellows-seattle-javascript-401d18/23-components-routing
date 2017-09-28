import React from 'react';
import './_list-container.scss';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedTitle: '',
      updatedContent: '',
      noteList:
      this.props.notes.map(item =>
        <li key={item.id}>
        <h2>{item.title}:</h2>{item.content}
        <button onClick={() => this.props.handleNoteDelete(item)}>Delete</button>
        {
        // <form
        //   className="update-form"
        //   onSubmit={() => this.props.handleNoteUpdate(item)}>
        //
        //   <input
        //     type="text"
        //     name="updatedTitle"
        //     placeholder="updatedTitle"
        //     value={this.state.updatedTitle}
        //     onChange={() => this.props.handleNoteUpdate(item)}/>
        //     <br/>
        //
        //   <textarea
        //     type="text"
        //     name="updatedContent"
        //     placeholder="Updated Content"
        //     value={this.state.updatedContent}
        //     onChange={() => this.props.handleNoteUpdate(item)}/>
        //
        //   <button type="submit">UpdateInForm</button>
        // </form>
      }
        <button onDoubleClick={() => this.props.handleNoteUpdate(item)}>Update</button>


        </li>

      ),
    };


  }




  render() {
    return (
      <div className="note-list">
        {this.state.noteList ?
          <ul>
            {this.state.noteList}
          </ul> :
          <h2>There are no notes</h2>
        }
      </div>
    );
  }
}

export default ListContainer;
