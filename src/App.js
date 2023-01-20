import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
// import React from 'react'

function Appa() {
 const [mode,setmode]=useState('light')//dark mode is enambled
 const [alert,setalert]=useState(null)
 const setAlert=(message,type)=>{
setalert({
  msg:message,
  type:type
})
setTimeout(setalert, 2000,null);
 }
 const toggelMode=function()
 {
  if(mode==='light')
  {setmode('dark')
  document.querySelector('body').style.background='#171823';
  setAlert(" Dark mode has been enabled","success")
}
else
{ setmode('light')
document.querySelector('body').style.background=`white`
setAlert(" Light mode has been enabled","success")
} }

  return (
    // <h1>my name is First{1+2+name}</h1>
    <>
   
<Navbar title={"TxtUtils"} aboutNav={123}  mode={mode} toggleMode={toggelMode}/>
<Alert alert={alert}/>
<div className="container">
<TextForm heading="Write Your Text" mode={mode} setAlert={setAlert}/>
{/* <About/> */}
</div>
    </>
  );
}

export default Appa;
