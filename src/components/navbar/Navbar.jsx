import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)
  
  return (

    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder="search....."   />
          <SearchIcon/>
        </div>

        <div className='items'>
          <div className='item'>
          <LanguageIcon className='icon' />
            <span>English</span>
          </div>
          <div className='item'>
            <ChatBubbleIcon className='icon'/>
          </div>
          <div className='item' onClick={()=>{dispatch({type:"TOGGLE"})}}>
            <BedtimeIcon className='icon'/>
          </div>
          <div className='item'>
            <NotificationsNoneIcon className='icon'/>
            <div className='counter'>2</div>
          </div>
         
          <div className='item'>
            <ListIcon className='icon'/>
            <div className='counter'>4</div>
          </div>
          <div className='item'>
            <img src="https://i.picsum.photos/id/523/200/300.jpg?hmac=QriXiPxFy9-cMkF-FT75nsGiR-WfIvH1wg1tYx3fpJA"
            className='avatarImg'
            alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar