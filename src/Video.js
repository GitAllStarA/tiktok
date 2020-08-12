import React from "react";
import { useRef, useState } from "react"
import "./Video.css";
import VideoFooter from './VideoFooter'

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false)
    } else {
      videoRef.current.play();
      setPlaying(true)
    }

  }
  return (
    <div className="video">
      
      <video
        className="video_player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/af0ac0281953bb190a3a3a9939331a79/5f35b10d/video/tos/useast2a/tos-useast2a-ve-0068c002/1c56b25c20404331ad61379b69f478a0/?a=1233&amp;br=1588&amp;bt=794&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=202008112130530101902090831E1195A0&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=ajs2Omo7c2tqdTMzZzczM0ApNTc5NjVlNDs2N2Q1ZmhmNGczNmUvMjNsZmxfLS1fMTZzc14xNWE1YS9eNWFhNV8yMGI6Yw%3D%3D&amp;vl=&amp;vr=">
       
        </video>
      <VideoFooter />
    </div>
  );
}

export default Video;
