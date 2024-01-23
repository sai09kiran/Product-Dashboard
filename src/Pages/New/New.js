import Sidebar from "../../Components/SidebarRight/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import "../New/New.css"

const New = () => {
  return (
    <div className="new ">
    <Sidebar/>
    <div className="newcontainer">
      <Navbar/>
     
     <div className="toop">

    <h1>Add New Users</h1>


     </div>












     <div className="boottom"> 
      <div className="LeftSide">

      <img
              src={
                   "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
      
      </div>
      
      <div className="RightSide">
        <form>

       <div className="frominput">
        <label htmlFor="file" >
          image<DriveFolderUploadOutlinedIcon className="fileimg"/></label>
        <input type="file" id="file" style={{display :"none"}} />
       </div>


       <div className="frominput">
        <label >UserName </label>
        <input type="text" placeholder="sai"/>
       </div>

       <div className="frominput">
        <label > Name nd surname </label>
        <input type="text" placeholder="sai kiran c"/>
       </div>

       <div className="frominput">
        <label >Email </label>
        <input type="Email" placeholder="saikiran@gmail.com"/>
       </div>

       <div className="frominput">
        <label >phone </label>
        <input type="text" placeholder="9573660611"/>
       </div>

       <div className="frominput">
        <label >Password </label>
        <input type="password"/>
       </div>

       <div className="frominput">
        <label >Address</label>
        <input type="text" placeholder="Madhapur hyd"/>
       </div>

       <div className="frominput">
        <label >Country</label>
        <input type="text" placeholder="India"/>
       </div>
       
       <button>send</button>
        </form>
    
      </div>
     
     </div>


    </div>
    
    </div>

  )
}

export default New