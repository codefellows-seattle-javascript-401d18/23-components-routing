import React from 'react';
var Link = require('react-router-dom').Link;

class About extends React.Component {
  render () {
    return (
      <div className="about-container">
        <h1>About</h1>
        <Link className='button' to='/battle'>
        Battle
        </Link>
      </div>
    );
  }
}

export default About;
