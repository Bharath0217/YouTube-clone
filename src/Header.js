import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, sertInputSearch] = useState("");
    return (
        <div className='header'>
            <div className='header-left'>
                <MenuIcon />
                <Link to="/">
                    <img
                        className='header-logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg" alt="YouTube 2024.svg" height="117" width="146" />
                </Link>
            </div>
            <div className='header-center'>
                <input onChange={e => sertInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text' />
                <Link to={`./search/${inputSearch}`}>
                    <SearchIcon className='header-search-button' />
                </Link>

            </div>
            <div className='header-right'>
                <VideoCallIcon className='header-icon' />
                <AppsIcon className='header-icon' />
                <NotificationsIcon className='header-icon' />
                <Avatar
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Kausalya_actress.jpg/512px-Kausalya_actress.jpg?20140819094106'
                />

            </div>
        </div>
    )
}

export default Header;
