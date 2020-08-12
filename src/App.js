import React from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './Video.js'
import VideoFooter from './VideoFooter';

function App() {
  return (
    <div className="App">
  
      <div class="app__videos">
        <Video> <VideoFooter /></Video>
        <Video/>
       
      </div>
  </div>
  );
}

export default App;
