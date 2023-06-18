import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main1.js";
import Footer from "./components/Footer1.js";
import Register from "./components/Registration/Register";
import PatientMenu from './components/MainmenuPatient/PatientMenu';
import './App.css';
import Header1 from './components/Registration/Header1';
import Hospital from './components/MainmenuPatient/Hospital/Hospital';
import Consultant from './components/MainmenuPatient/Consultant/Consultant';
import About from './About';
import Contactus from './Contactus';

function App() {
  return (
    <div>
      <Router>
    
          <Route exact path='/'>
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path='/registration'>
            <Register/>
          </Route>
          <Route path='/about'>
            <Header1/>
            <About/>
          </Route>
          <Route path='/contactus'>
            <Header1/>
            <Contactus/>
          </Route>
          <Route path='/home'>
            <PatientMenu/>
          </Route>
          <Route path='/hospitalhome'>
            <Hospital/>
          </Route>
          <Route path='/consultanthome'>
            <Consultant/>
          </Route>
     
      </Router>
    </div>
  )
}

export default App;