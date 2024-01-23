
import './App.css';

import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login"
import Lists from "./Pages/Lists/Lists"
import Single from "./Pages/Single/Single"
import New from "./Pages/New/New"

import "./Styles/Styles.css"

import { BrowserRouter as Router, Routes, Route}from "react-router-dom"
import { useContext } from 'react';
import { DarkmodeContext } from './Context/DarkmodeContext';

function App() {

  const {darkmode} = useContext(DarkmodeContext);
  
  return (
   <>
     <div className={ darkmode ? "app dark" :"app"}>

     <Router>
<Routes>
<Route path='/'element ={ <Home/>}/>
<Route path='/Login' element ={<Login/>}/>
<Route path='/Lists'  element ={<Lists/>}/>
<Route path='/Single' element ={<Single/>}/>
<Route path='/New' element ={<New/>}/>
</Routes>
  </Router>


     </div>

   
   
   
   </>
  );
}

export default App;
