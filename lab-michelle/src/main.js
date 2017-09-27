import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
// import COMPONENT from './FILEPATH'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //SOME THINGS
    };
    //BIND STUFF
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }


  render() {
    //a function for the Notes doing whatever they do
    return (
      <div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
