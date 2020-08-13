import React, { useState } from "react";
import "./videoSideBar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({likes, shares, messages}) {
  const [liked, setliked] = useState(false);
  const [share, shared] = useState(false);
 
  return (
    <div className="Video_SideBAr">
      <div className="videoSideBAr_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setliked(false)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setliked(true)} />
        )}

        <p>{liked ? likes+1 : likes}</p>
      </div>

      <div className="videoSideBAr_button">
        <MessageIcon  />
        <p>{messages}</p>
      </div>
      <div className="videoSideBAr_button">
        <ShareIcon onClick={(e) => shared(true)} />
        <p>{share ? shares+1 : shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
