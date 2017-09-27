// import './styles/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import AboutContainer from './components/app'
import DashboardContainer from './components/dashboard-container'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Note: [],
      Content: [],
    }
    this.getApp = this.getApp.bind(this)
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  getApp() {
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
              <Route exact path="/" component={() => <DashboardContainer app={this.getApp()}/>}/>
              <Route exact path="/about" component={AboutContainer}/>
            </section>
          </BrowserRouter>
        </main>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
