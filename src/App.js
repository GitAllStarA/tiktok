import React from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './Video.js'
import VideoFooter from './VideoFooter';

function App() {
  return (
    <div className="App">
  
      <div class="app__videos">
<Video 
url="https://v16m.tiktokcdn.com/0404a3afe96cff893010e23f6e4375a6/5f385a96/video/tos/useast2a/tos-useast2a-pve-0068/b05b98d834764ca1a1c02fc2dd8189f5/?a=1233&amp;br=2900&amp;bt=1450&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=20200813215846010189194163074D6B64&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=M2l3a3h3bXJmdjMzOTczM0ApOjo8aGk2Nzs5NzdkZzM6N2c2ci1pYWQuMGhfLS1gMTZzcy4wM2BjYTUvNl8tL2IuMC06Yw%3D%3D&amp;vl=&amp;vr="
                channel="Kim"
                description="some songhhhh"
                song="some song"
      likes={123}
      messages={123}
      shares={200}

/> 
        <Video/>
       
      </div>
  </div>
  );
}

export default App;
