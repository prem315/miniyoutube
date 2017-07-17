import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBJxUIVxn7mJFnlgplbt5JH97CKjGqfD8c';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: []
    };
    YTSearch({key: API_KEY, term: 'batman'}, (videos) => {
      console.log(videos);
      this.setState({ videos });
    });

  }
  render() {
    return (
      <div className="App">
        <h1>Mini Youtube</h1>
        <SearchBar></SearchBar>
        <VideoList videos={this.state.videos}></VideoList>
      </div>
    );
  }
}

export default App;
