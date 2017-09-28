import './styles/main.scss'

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

const API_URL = 'http://www.reddit.com/r';
//pulled from the long form web address
//${searchFormBoard}.json?limit=${searchFormLimit}'
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      board: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('__FORM_PROPS__', this.props);
    console.log('__FORM_STATE__', this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchSubReddit(this.state.board, this.state.limit);
  }

  handleBoardChange(e) {
    this.state({board: e.target.value});
  }

  handleLimitChange(e){

  }



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };

  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  componentDidMount() {

  }


  render() {
    return (
      <section className="application">
      <SearchForm searchSubReddit={this.fetchSubReddit}/>
      <SearchResultList results={this.state.topics}/>
      </section>

  }
}

ReactDom.render(<App />, document.getElementById('root'));
