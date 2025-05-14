import React, {useState} from "react";

export default function TextForm({heading,mode,showAlert}) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick=()=>{
        // console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText)
        showAlert("Cleared message!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopyClick = () =>{
      let text = document.getElementById("myBox");
      text.select();
      // text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      showAlert("Copied To Clipboard!","success");
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      showAlert("Remove extra spaces!","success");
    }

    const [text, setText] = useState("");
    // text ="new text" // wrong way to change the state
    // setText ("new text") // correct way to change the state
  return (
    <>
    <div className="container"  style={
            {color:mode==='dark'?'white':'#042743'}
          }>
        <h1>{heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={
            {backgroundColor:mode==='dark'?'grey':'white',color:mode==='dark'?'white':'#042743'}
          }
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={
            {color:mode==='dark'?'white':'#042743'}
          }>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  );
}
