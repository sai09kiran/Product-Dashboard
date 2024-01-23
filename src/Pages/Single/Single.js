import React from 'react'

import "../Single/Single.css"

import Sidebar from "../../Components/SidebarRight/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import Chats from '../../Components/chats/Chats'
import Table from '../../Components/table/Table'



const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singlecontainer'> 
    <Navbar/>

    <div className="up">
      <div className="left">
        <div className="editbutton">Edit</div>
        <h1 className='tittle'>Information</h1>
        <div className="item">
        <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
             <div className="details">
              <h1 className='itemtilte'>kulsum</h1>

              <div className="detailitem">
                <span className="itemkey">Email:</span>
                <span className="itemkey">kulsai@gmail.com</span>
              </div>

              <div className="detailitem">
                <span className="itemkey">phone:</span>
                <span className="itemkey">9573660611</span>
              </div>

              <div className="detailitem">
                <span className="itemkey">addres:</span>
                <span className="itemkey">hyd charminar</span>
              </div>
            
              <div className="detailitem">
                <span className="itemkey">country:</span>
                <span className="itemkey">India</span>
              </div>



             </div>
        </div>
      </div>
      <div className="right">
   <Chats aspect={3 / 1} title ="User spending (last 6 months)"/>

      </div>

    </div>
    <div className="down">
    <h1 className='tittle'>Last Transtions</h1>
    <Table/>
    </div>
       
      </div>
    </div>
  )
}

export default Single