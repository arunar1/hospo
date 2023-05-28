import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main1.js";
import Footer from "./components/Footer1.js";
import Register from "./components/Registration/Register";
import PatientMenu from './components/MainmenuPatient/PatientMenu';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path='/registration'>
            <Register/>
          </Route>
          <Route path='/home'>
            <PatientMenu/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;