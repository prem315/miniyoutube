import React, { Component } from 'react';
import SearchBar from './search_bar';

const API_KEY = 'AIzaSyBJxUIVxn7mJFnlgplbt5JH97CKjGqfD8c';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mini Youtube</h1>
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default App;
