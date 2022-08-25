import React from 'react';
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import PersonIcon from '@material-ui/icons/Person';
import CachedIcon from '@material-ui/icons/Cached';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
        <nav>
          <div className='logo'>
            <img src='/assets/image/BHlogo.png'/>
          </div>
    
        <ul>
        <li><DesktopWindowsIcon/></li>
        <li><AccessTimeIcon/></li>
        <li><CardTravelIcon/></li>
        <li><AddAlarmIcon/></li>
        <li className='person'><PersonIcon/></li>
        <li><CachedIcon/></li>
        <li><NotificationsNoneIcon/></li>
        <li><CreditCardIcon/></li>
        <li><SmsOutlinedIcon/></li>
        <li>
            <span className='more-icon'><MoreHorizOutlinedIcon/></span>
                <p className='more'>More</p>
            
        </li>
        <div className='side-footer'>
        <li><AssignmentReturnedOutlinedIcon/></li>
        <li><ModeCommentOutlinedIcon/></li>
        
        <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/50.jpg" />
        </div>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;