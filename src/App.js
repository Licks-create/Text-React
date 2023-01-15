import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
// import React from 'react'
function Appa() {
  return (
    // <h1>my name is First{1+2+name}</h1>
    <>
   
<Navbar title={"TxtUtils"} aboutNav="About"/>
{/* <Navbar /> */}
<div className="container">
  <TextForm/>
<About/>
</div>
    </>
  );
}

export default Appa;
