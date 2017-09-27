// import './styles/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import DashboardContainer from '../dashboard-container';
import NoteCreateForm from '../note-create-form';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      note: [],
    }
    this.getApp = this.getAppState.bind(this)
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  getAppState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render() {
    return (
      <div className="application">
        <header>
          <nav>
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/about">about</a></li>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <BrowserRouter>
            <section>
              <Route exact path="/"
                component={() =>
                  <DashboardContainer app={this.getAppState()}/>
                }
              />
            </section>
          </BrowserRouter>
        </main>
      </div>
    )
  }
}

export default App;
