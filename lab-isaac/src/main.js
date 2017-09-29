// import './styles/main.scss'

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from './component/dashboard-container';
import AboutContainer from './component/about-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArray: [],
    };
  }

  getApp() {
    return{
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render() {
    return (
      <div className="application">
        <header>
          <h1>NoteApp Lab</h1>
          <nav>
            <ul>
              <li><a href="/">Dashboard</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <BrowserRouter>
            <section>
              <Route exact path="/" component={() => <DashboardContainer app={this.getApp()}/>} />
              <Route exact path="/about" component={AboutContainer} />
            </section>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
