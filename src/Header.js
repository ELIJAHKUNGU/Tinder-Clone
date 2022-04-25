import React from 'react'
import './header.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  return (
    <div className="header">
      {/* BEM */}
      <IconButton>
        <PermIdentityIcon className="header_icon" fontSize="large"/>
        </IconButton>
        <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png" alt="" srcset="" />
        {/* <img src="https://tinder.com/static/tinder.png" alt="" srcset="" /> */}
        <IconButton>
        <ForumIcon className="header_icon" fontSize="large"/>
        </IconButton>
    </div>
  )
}

export default Header