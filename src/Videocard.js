import { Avatar } from '@mui/material';
import React from 'react'
import './Videocard.css';

function Videocard( {image, title, channel, views, timestamp, channelImage }) {
    return (
        <><div className='videoCard'>
            <img className='videoCard-thumbnail' src={image} alt='' />
            <div className='videoCard-info'>
                <Avatar
                className='videoCard-avatar'
                    alt={channel}
                    src={channelImage}
                />
                <div className='videoCard-text'>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views}  · {timestamp}
                    </p>
                </div>
            </div>
        </div></>
    )
}

export default Videocard
