import React from 'react'

import Sidebar from"../../Components/SidebarRight/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"

import "../Lists/Lists.css"
import DataTable from '../../Components/datatable/DataTable'

const Lists = () => {
  return (
    <div className='list'>
    <Sidebar/>
    <div className="listcontainor">
      <Navbar/>
      <DataTable/>
    </div>
    
    
    </div>
  )
}

export default Lists