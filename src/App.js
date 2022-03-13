import * as React from 'react';
import './App.css';
import Header from './header';
import Profile from './profile';
import NavBar from './main-nav';
import Coder from './ide/ideBasic';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Database from './database/db';
import Terminal from './terminal/ssh';
import Udpiler from './udpiler/udpiler';



function App() {
  return (

    <any>
        <BrowserRouter>
      <Header />
      <NavBar />
 
    
    
    <Routes>
      <Route path="/app/" element={  <div className="content-wrapper"> <Coder/> </div> }/>
      <Route path="/app/database" element={ <div className="content-wrapper"  style={{'width':"100%",'marginTop':"110px"}}><Database/> </div>}/>
      <Route path="/app/terminal" element={<div className="content-wrapper"  style={{'width':"100%",'marginTop':"110px"}}><Terminal/> </div>}/>
      <Route path="/app/udpiler" element={<div className="content-wrapper" style={{'width':"100%",'marginTop':"110px"}}><Udpiler/> </div> }/>
       
      </Routes>
 
        {/* <Profile /> */}
    

      </BrowserRouter>
    </any>


  );
}

export default App;
