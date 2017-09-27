import React from 'react'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      NoteList: this.props.expenses.map(item => <li key={item.id}>{item.title}: {item.content}</li>)
    }
  }

  render() {
    return (
      <div className="expense-list">
        {this.state.NoteList ?
          <ul>
            {this.state.NoteList}
          </ul> :
          <h2>There are no expenses</h2>
        }
      </div>
    )
  }
}

export default NoteList
