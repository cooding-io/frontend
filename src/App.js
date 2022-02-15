import * as React from 'react';
import './App.css';
import Header from './header';
import Profile from './profile';
import NavBar from './main-nav';
import Coder from './ide/ideBasic';




function App() {
  return (

    <any>
      <Header />
      <NavBar />
 
      <div className="content-wrapper">

      <Coder/>
        {/* <Profile /> */}
    
      </div>
    </any>


  );
}

export default App;
