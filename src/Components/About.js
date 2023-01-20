import React, { useState } from 'react'

export default function About() {
    let [styl,setMyStyle]=useState(
        {
            backgroundColor:'',
            color:"",
            borderRadius:'',
            // margin:'10px 10px'
        }

    );
 const [clas,setClass]=useState('btn btn-dark my-3')
 const [btn,setBtn]=useState('Enable dark')
   const enableDark =(e)=>{
    if(styl.backgroundColor!='#171717')
   {
     setMyStyle(
  { backgroundColor:'#171717',color:"white",borderRadius:"10px"}
    )
    e.target.innerText="enable light mode";
    setClass("btn btn-light my-3");
    setBtn("Enable light")
    document.querySelector('body').style.background="black";
    document.querySelector('body').style.color="white";
    
}
else
{
    document.querySelector('body').style.background="white";
    document.querySelector('body').style.color="black";
    setMyStyle(
        { backgroundColor:'white',color:"black",borderRadius:"10px"}
        )
        
        setBtn("Enable dark")
        setClass("btn btn-dark my-3")
    }
   }
   return (
       <div className='container' style={{styl}}>
    <h1>About us</h1>
    <div className="accordion" id="accordionExample" >
<div className="accordion-item" style={styl}>
<h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={styl}>
    Accordion Item #1
    </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
</div>
</div>
<div className="accordion-item" style={styl}>
<h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={styl}>
    Accordion Item #2
    </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body" >
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
</div>
</div>
<div className="accordion-item" style={styl}>
<h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={styl}>
    Accordion Item #3
    </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
</div>
</div>
</div>
<div className="container">

<button className={clas} onClick={enableDark}>{btn}</button>
</div>
</div>
)
}
