import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","Success");
    }
    const handlelowerClick=()=>
    {
        let newTextlow=text.toLowerCase();
        setText(newTextlow);
        props.showAlert("Converted to Lowercase!","Success");
    }
    const handleclearonClick=()=>
    {
        let newclearText="";
        setText(newclearText);
        props.showAlert("Text Cleared!","Success");
    }
    const handlecopyonClick=()=>
    {
      var text=document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard!","Success");
    }
    const handleOnChange=(event)=>
    {
        setText(event.target.value);
    }
    const [text,setText]=useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className="my-1">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handlelowerClick} >Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclearonClick} >Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handlecopyonClick} >Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
