import React, {useState} from 'react'
export default function TextForm(props) {
const ChangeToUp =(even)=>{
console.log('uppercasing is to be done');
let newText=document.getElementById('my-box').value.toUpperCase();
settext(newText)
// console.log(text)
}
const ChangeToLow =(even)=>{
console.log('lowercasing is to be done');
let newText=document.getElementById('my-box').value.toLowerCase();
settext(newText)
// console.log(text)
}
const Changed =(even)=>{
console.log('Onchange');
// console.log(even.target.value);

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
    let x=document.getElementById('my-box').select();
    console.log(x);
    navigator.clipboard.writeText(text)
}
const getEmail=(even)=>
{let n=" ";
    let s=text.split(" ")
    for(const x of s)
    {
      if(x.includes("@"))
      {
         n+=`<li>${x}</li>`;
       console.log(s)
    //    x.select();
    document.getElementById('loe').style.display="block";
    document.getElementById('loE').innerHTML=n;
}
}
}
const [text,settext]=useState("");

return (
<>

<div className='container'>
<h1>{props.heading}</h1>

<label htmlFor="my-box" className="form-label">Example textarea</label>
<textarea className="form-control" value={text} id="my-box" rows="10" onChange={Changed} onClick={val} placeholder="Enter your text here"></textarea>
{/* when value is given then onChange is important or must */}
<button className="btn btn-primary my-3" onClick={ChangeToUp}>convert to upper case</button>
<button className="btn btn-primary mx-3" onClick={ChangeToLow}>convert to lower case</button>
<button className="btn btn-primary" onClick={copyToClipboard}>copy text</button>
<button className="btn btn-primary mx-3" onClick={getEmail}>getEmail</button>
</div>
<div className="container my-2">
        <h3 id='loe' style={{display:'none'}}>

     List of email ids found 
        </h3>
    <ol value="1" id='loE'>
      
    </ol>
<h2>Your Text Summary</h2>
<p>
<b>
    {text.split(" ").length} 
</b>&nbsp;
    words , &nbsp;
    <b>
    {text.length} 
    </b> &nbsp;
    characters</p>
<p>
    <b>
    {.008*text.split(" ").length} 
    </b> &nbsp;
    Minutes to read</p>
</div>
</>
)
}
