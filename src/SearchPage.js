import React from 'react';
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRows from './ChannelRows';
import VideoRows from './VideoRows';
function SearchPage() {

    return (
        <div className='searchPage'>
            <div className='searchPage-filter'>
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr></hr>
            <ChannelRows
                image="https://yt3.ggpht.com/Ep1bqaU3J0HcdsmrLoHivkN265srA7Mdvj9Dq0hcTyCcXiDDLxpegWxnCRuFnKIQiSvX4iqv2g=s400-c-k-c0x00ffffff-no-rj"
                channel="Vj Siddhu Vlogs"
                verified
                subs="18M"
                noOfVideos={342}
                description="Get ready to watch my latest vlogs depicting life in detail that will make you slow down and enjoy life a little better. Subscribe to my channel and stay connected!"
            />
            <hr />
            <VideoRows
                image="https://i.ytimg.com/vi/X7RcRT5k3k4/hqdefault.jpg"
                channel="Vj Siddhu Vlogs"
                subs="18M"
                timestamp="7 days ago"
                title="Motta Maadi Party | Vj siddhu | Harshath"
                views="7.8M"
                noOfVideos={342}
                description="Get ready to watch my latest vlogs depicting life in detail that will make you slow down and enjoy life a little better."

            />
            <VideoRows
                image="https://i.ytimg.com/vi/Q72jAsF3KvI/hqdefault.jpg"
                channel="Vj Siddhu Vlogs"
                subs="18M"
                timestamp="9 days ago"
                title="வாடா சாப்பிட்டு போடா😋💥| Office Samayal🥳| Vj Siddhu Vlogs"
                views="7M"
                noOfVideos={342}
                description="Get ready to watch my latest vlogs depicting life in detail that will make you slow down and enjoy life a little better."

            />       <VideoRows
                image="https://i.ytimg.com/vi/EFYF77LYv_g/hqdefault.jpg"
                channel="Vj Siddhu Vlogs"
                subs="18M"
                timestamp="12 days ago"
                title="வெக்கம் கலந்த பயம் - Siddhu's Reaction for FDFS🤩 | Vj Siddhu Vlogs"
                views="78M"
                noOfVideos={342}
                description="Get ready to watch my latest vlogs depicting life in detail that will make you slow down and enjoy life a little better."

            />       <VideoRows
                image="https://i.ytimg.com/vi/CHIRWWiO5l4/hqdefault.jpg"
                channel="Vj Siddhu Vlogs"
                subs="18M"
                timestamp="27 days ago"
                title="எதிரிக்கு கூட Rambo நிலமை வரக்கூடாது😕 | Vj Siddhu Vlogs"
                views="53M"
                noOfVideos={342}
                description="Get ready to watch my latest vlogs depicting life in detail that will make you slow down and enjoy life a little better."

            />
        </div>
    )
}

export default SearchPage
