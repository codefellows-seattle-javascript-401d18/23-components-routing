import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
// import COMPONENT from './FILEPATH'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: [],
      //SOME THINGS
    };
    //BIND STUFF
    this.appStateGet = this.appStateGet.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  //A function to pass state to notes//
  appStateGet() {
    return {
      state: this.state,
      setState: this.setState,
    };
  }

  render() {
    //a function for the Notes doing whatever they do
    return (
      <div className = "application">
        <header>
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
          </ul>
        </header>
        <main className="main">
          <BrowserRouter>
            <section>
              <Route exact path="/" component = {() => <NoteCreateForm app={this.appStateGet()} /> }/>
            </section>
            </BrowserRouter>
        </main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
