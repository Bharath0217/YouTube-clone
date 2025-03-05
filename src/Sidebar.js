import React from 'react';
import './Sidebar.css';
import SidebarRows from './SidebarRows';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <div className='sidebar'>
      
      <SidebarRows selected Icon={HomeIcon} title='Home'/>
      <SidebarRows Icon={WhatshotIcon} title='Trending'/>
      <SidebarRows Icon={SubscriptionsIcon} title='Subscription'/>
      <hr/>
      <SidebarRows Icon={LibraryAddIcon} title='Library'/>
      <SidebarRows Icon={HistoryIcon} title='History'/>
      <SidebarRows Icon={OndemandVideoIcon} title='Your Videos'/>
      <SidebarRows Icon={WatchLaterIcon} title='Watch Later'/>
      <SidebarRows Icon={ThumbUpOutlinedIcon} title='Liked Videos'/>
      <SidebarRows Icon={ExpandMoreIcon} title='Show More'/>

    </div>
  )
}

export default Sidebar
