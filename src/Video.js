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
        src="https://v16m.tiktokcdn.com/8f45f5bd00dc48fb1b2106a094d78e94/5f2c6f67/video/tos/useast2a/tos-useast2a-ve-0068c004/3e66cec551374185b31a6399a0c5f5ac/?a=1233&amp;br=3550&amp;bt=1775&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=2020080421002301019020909503063DA1&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=M212NDxqczczdjMzOTczM0ApaTY5NTw4aWU7Nzg3OGU2OmduZGdwYTRkM2VfLS1gMTZzcy8xYS8zL15eYjVhMF42MV46Yw%3D%3D&amp;vl=&amp"
        >
      
      <VideoFooter/>
      
        </video>
      {/*THIS IS VIDEOFOOTER*/}
      {/*THIS IS VIDEOSIDEBAR*/}
    </div>
  );
}

export default Video;
