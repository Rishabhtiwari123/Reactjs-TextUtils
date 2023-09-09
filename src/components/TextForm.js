import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick =()=>{
      // console.log("uppercase was clicked")
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const handleReverseClick=()=>{
    let newText=text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text Reversed","success");
  }
    const handleOnChange =(event)=>{
        console.log("OnChange")
        setText(event.target.value);
    }
    const handleCopy=()=>{
      // var text= document.getElementById("myBox");
      // text.select();
      // navigator.clipboard.writeText(text.value);
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges()
      props.showAlert("Copied To Clipboard","success");
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));       
      props.showAlert("Removed ExtraSpaces","success"); 
    }                                 
    const [text,setText]=useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 className='mb-2'>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'#555b97':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert To Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleReverseClick}>Reverse Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#0a2354'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
       <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes are taken to read </p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Nothing To Preview"}</p>
    </div>
    </>
  )
}
