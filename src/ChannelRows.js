import React from 'react'
import './ChannelRows.css'
import { Avatar } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ChannelRows({ image, channel, verified, noOfVideos, subs, description }) {
    return (
        <div className='channelRows'>
            <Avatar className=' channelRows-logo'
                alt={channel} src={image}
            />
            <div className='channelRows-text'>
                <h4>{channel}{verified && <CheckCircleOutlineIcon />}</h4>
                <p>
                    {subs} Subscribers ·{noOfVideos} Videos
                </p>
                <p>
                    {description}
                </p>
                
            </div>
           
            
        </div>
    )
}

export default ChannelRows
