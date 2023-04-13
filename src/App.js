import React,{Component} from 'react';
import './App.css';
import Login from './componets/Login';
import Nav from './componets/Nav';
import Head from './componets/Head';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Head/>
      <Login/>

    </div>
  );
}

export default App;
