import React, { Component } from 'react';
import { jokes } from './allJokes.json';
import Joke from './joke';
import './App.css';

class App extends Component {
  state = {
    joke: 'Click the above button to generate a joke!'
  };

  generateJoke() {
    let joke = jokes[Math.floor(Math.random() * jokes.length)];
    this.setState({
      joke: joke
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Joke Generator</h1>
          <button onClick={() => this.generateJoke()}>GENERATE</button>
        </div>
        <div className='App-intro'>
          <Joke joke={this.state.joke} />
        </div>
        <small className='github-link'>
          Made with <i className='fa fa-heart'></i> by&nbsp;
          <a
            href='https://github.com/sihaocao'
            target='_blank'
            rel='noopener noreferrer'
          >
            Sihao Cao
          </a>
        </small>
      </div>
    );
  }
}

export default App;
