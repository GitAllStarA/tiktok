import React from 'react'
import './videoFooter.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'



function VideoFooter({channel, description, song}) {
return (
<div className="videoFooter">
    <div className="videoFooter_details">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_Ticker">
            <MusicNoteIcon className="videoFooter_ICon" />
            <Ticker mode="smooth">

                {
                ({index})=>( <>
                    <p>{song}</p>
                </>)
                }
            </Ticker>
        </div>


    </div>
    <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />

</div>
)
}

export default VideoFooter