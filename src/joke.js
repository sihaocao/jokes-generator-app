import React from 'react';
import './joke.css';

export default class Joke extends React.Component {
  render() {
    return <div className='joke'>{this.props.joke}</div>;
  }
}
