import React from "react";
import Header from "./components/Header";
import Main from "./components/Main1.js";
import Footer from "./components/Footer1.js";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Main />
        <Footer />
        
      </Router>
    </div>
  )
}

export default App;