import React from 'react'
import './VideoRows.css'
function VideoRows(
    { image, subs, description, channel, timestamp, title, views }
) {
    return (
        <div className='videoRows'>
            <img src={image} alt='channel'/>
            <div className='videoRows-text'>
                <h3>{title}</h3>
                <p>
                    {channel}  · {subs} Subscribers  · {views} Views  · {timestamp}
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default VideoRows
