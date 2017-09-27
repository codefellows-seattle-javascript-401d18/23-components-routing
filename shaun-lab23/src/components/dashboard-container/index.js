import React from 'react'
import uuid from 'uuid/v4'
import NoteCreateForm from '../note-create-form'
import NoteList from '../note-list'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.noteCreate = this.noteCreate.bind(this)
    this.deleteCreate = this.deleteCreate.bint(this)
  }

  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASHBOARD__', this.props.app.state)
  }

  noteCreate(note) {
    expense.id = uuid()
    this.props.app.setState(prevState => ({
      note: [...prevState.expenses, note]
    }))
  }
  // deleteCreate(note)

  render() {
    return (
      <div className="dashboard-container">
        <h2>Notes and Fun lists</h2>
        <NoteCreateForm handleExpenseCreate={this.noteCreate}/>
        <NoteList expenses={this.props.app.state.note}/>
      </div>
    )
  }
}
export default DashboardContainer
