import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main1.js";
import Footer from "./components/Footer1.js";
import Register from "./components/Registration/Register";

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
          <Link to='/register '>
            <Register/>
          </Link>
        </Switch>
      </Router>
    </div>
  )
}

export default App;