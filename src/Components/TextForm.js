import React, {useState} from 'react'
export default function TextForm(props) {

const ChangeToUp =(even)=>{
console.log('uppercasing is to be done');
let newText=document.getElementById('my-box').value.toUpperCase();
settext(newText)
{props.setAlert("Upper case done!","success")}
// console.log(text)
}

const ChangeToLow =(even)=>{
    console.log('lowercasing is to be done');
    let newText=document.getElementById('my-box').value.toLowerCase();
    settext(newText)
    {props.setAlert("Lower case done!","success")}
    // console.log(text)
}
const Changed =(even)=>{
    console.log('Onchange');
    console.log(even.target.value);
    
    settext(even.target.value)
    // let newText=document.getElementById('my-box').value.toUpperCase();
    // settext(newText)
}
const val=(even)=>
{
    console.log('clicked');
    even.target.removeAttribute('placeholder')
    // even.target.setAttribute('value',`${text}`)
    // settext("helo")
}
const copyToClipboard=(even)=>
{
    {props.setAlert("Clip copied!","success")}
    let x=document.getElementById('my-box').select(); 
    console.log(x);
    navigator.clipboard.writeText(text)
}
const getEmail=(even)=>
{let n=" ";
let s=text.split(" ")
for(const x of s)
{
    if(x.includes("@")&&x.includes("."))
    {
        n+=`<li>${x}</li>`;
        console.log(s)
        //    x.select();
        setstyle({display:"block"})
        document.getElementById('loE').innerHTML=n;
        {props.setAlert("email exctraction done!","success")}
}
}
}
const [text,settext]=useState("");
const [styl,setstyle]=useState({display:'none'});
return (
<>

<div className='container' style={{color:props.mode=='dark'?'white':'black'}}>
<h1>{props.heading}</h1>

<textarea className="form-control" value={text} id="my-box" rows="10" onChange={Changed}  placeholder="Enter your text here" style={{backgroundColor:props.mode=='dark'?'grey':'inherit',color:props.mode=='dark'?'white':'black'}}></textarea>
{/* when value is given then onChange is important or must */}
<button className="btn btn-primary my-3" onClick={ChangeToUp}>convert to upper case</button>
<button className="btn btn-primary mx-3" onClick={ChangeToLow}>convert to lower case</button>
<button className="btn btn-primary" onClick={copyToClipboard}>copy text</button>
<button className="btn btn-primary mx-3" onClick={getEmail}>getEmail</button>
</div>
<div className="container my-2" style={{color:props.mode=='dark'?'white':'black'}}>
<h3 id='loe' style={styl}>List of email ids found</h3>
    
    <ol value="1" id='loE'>
      
    </ol>

<h2>Your Text Summary</h2>
<p>
<b>{text.split(" ").filter((x)=>x.length).length}</b>&nbsp; words,&nbsp;
<b>{text.length}</b> &nbsp;characters</p>
<p> <b>{.008*text.split(" ").length} </b> &nbsp; Minutes to read</p>

<p style={{display:text.length==0?"none":"none",border:'2px solid'}}>
{text}
</p>
</div>
</>
)
}
