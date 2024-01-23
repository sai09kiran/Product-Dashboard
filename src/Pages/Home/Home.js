
import React from 'react'
import Sidebar from '../../Components/SidebarRight/Sidebar'

import Navbar from "../../Components/Navbar/Navbar"
import "../Home/Home.css"
import Widget from '../../Components/Widget/Widget'
import Featrure from '../../Components/Featured/Featrure'
import Chats from '../../Components/chats/Chats'
import  Table  from "../../Components/table/Table"




const Home = () => {
  return (
    <>
    
    <div className="Home">
      <Sidebar/>
    <div className="homecontainer">
      <Navbar/>

      <div className="widgets">
        <Widget  type="user"/>
        <Widget  type="order"/>
        <Widget  type="erarning"/>
        <Widget  type="blance"/>
      </div>
    
       <div className="chats">
        <Featrure/>
        <Chats aspect={2 / 1}/>
       </div>

      <div className="listscontainer">
        <div className="listtitle">
          Last Trantions
        <Table/>
        </div>
      </div>


    </div>


    </div>
    
    </>
  )
}

export default Home

