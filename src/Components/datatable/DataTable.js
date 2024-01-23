

import "../datatable/DataTable.css"

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { userColumns , userRows } from "../../datatablesoucre";

import { Link } from "react-router-dom";
import { useState } from "react";

const DataTable = () => {

const [data,SetData]= useState(userRows)

const hnadleDelete = (id)=>{

  SetData(data.filter(item=>item.id !==id ))

}

   const actionColumn =[
    
    {field:"action" , headerName:"Action" , width :200 , renderCell : (params)=>{
      return (
      <div className=" cellAction"> 
       <Link to= "/Users" style={{textDecoration:"none"}}>
      <div className=" viewbutton">view </div>
      </Link>
      <div className=" deletebutton" onClick={()=>hnadleDelete(params.row.id)}>Delete </div>
      </div>

      )

    }
  }


   ]
    

    
  return (
    <div className='datatable'>
      <div className="datatabletitle">
        Add New User
        <Link to= "/New" style={{textDecoration:"none"}} className="Link">
          Add New
        </Link>
         
      </div>

<DataGrid
        rows={data}
        columns={userColumns . concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
      />

    </div>
  )
}

export default DataTable