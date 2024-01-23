import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChecklistIcon from '@mui/icons-material/Checklist';
import img from "./Assets/me.png"

import { useContext } from 'react';
import { DarkmodeContext } from '../../Context/DarkmodeContext';

import "../Navbar/Navbar.css"
const Navbar = () => {

  const {dispatch} = useContext(DarkmodeContext);

  return (
    <>
    
    <div className="nav">
        <div className="wapper">
          <div className="search">
            <input type="text" placeholder='search...' />
            <SearchIcon className='small'/>
          </div>
          <div className="items">
            <div className="item">
           <LanguageIcon className='small'/>
           English
            </div>
            <div className="item">
        <DarkModeIcon className='small' onclick={()=>dispatch({type:"TOGGLE"})}/>
            </div>
            <div className="item">
        <FullscreenExitIcon className='small'/>
            </div>
            <div className="item">
       <NotificationsOffIcon className='small'/>
       <div className="counter">1</div>
            </div>
            <div className="item">
      <ChatBubbleIcon className='small'/>
      <div className="counter">2</div>
            </div>
            <div className="item">
      <ChecklistIcon className='small'/>
            </div>
            <div className="items">
    <img src={img} alt="" />
            </div>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default Navbar