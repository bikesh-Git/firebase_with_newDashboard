import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <Link to="/" style={{textDecoration:"none"}}>
      <div className="top">
        <span className="logo">bikeshImg</span>
      </div>
      </Link>
  
      <hr />
      <div className="center">
        <ul>
            <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon"  />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <Link to="/users">
          <li>
            <GroupIcon  className="icon"/>
            <span>users</span>
          </li> </Link>
          <Link to="/products">
          <li>
            <CategoryIcon  className="icon"/>
            <span>products</span>
          </li>
          </Link>
          <li>
            <LocalShippingIcon  className="icon"/>
            <span>delivary</span>
          </li>

          <li>
            <BookmarkBorderIcon  className="icon"/>
            <span>Order</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <QueryStatsIcon  className="icon"/>
            <span>stats</span>
          </li>
          <li>
            <NotificationsIcon  className="icon"/>
            <span>notification</span>
          </li>
          <p className="title">Service</p>

          <li>
            <HealthAndSafetyIcon  className="icon" />
            <span>system health</span>
          </li>
          <li>
            <PsychologyIcon  className="icon"/>
            <span>logs</span>
          </li>
          <li>
            <SettingsIcon  className="icon"/>
            <span>setting</span>
          </li>
          <p className="title">User</p>
          <li>
            <SupervisedUserCircleIcon  className="icon"/>
            <span>profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption"  onClick={()=>dispatch({type:"DARK"})} ></div>
      
      </div>
    </div>
  );
};

export default Sidebar;
