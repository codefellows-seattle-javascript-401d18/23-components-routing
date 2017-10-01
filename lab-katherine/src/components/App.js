import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__',this.state);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path='/' component={() => <Dashboard app={this.getApp()}/>} />
            <Route path='/about' component={About} />
            <Route render={function (){
              return <p>Not Found</p>;
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
