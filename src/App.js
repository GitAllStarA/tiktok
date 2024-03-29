import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Video from "./Video.js";
import VideoFooter from "./VideoFooter";
import db from "./firebase.js";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="App">
      <div class="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
