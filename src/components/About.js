import React, { useState } from 'react'

export default function About(props) {
  // const [myStyle,setmyStyle]=useState({
  //   color:'white',
  //   backgroundColor:'black'
  // })
  // const[btntext,setBtnText]=useState("Enable Light Mode")
  // const toggleStyle=()=>{
  //   if(myStyle.color==='white'){
  //     setmyStyle({
  //       color:'black',
  //       backgroundColor:'white',
  //       border:'1px solid black'
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  //   else{
  //     setmyStyle({
  //       color:'white',
  //       backgroundColor:'black',
  //       border:'1px solid white'
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  // }
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#555b97',
    backgroundColor: props.mode === 'dark' ? '#555b97' : 'white',
    border:'2px solid',
    borderColor:props.mode==='black'?'white':'#555b97'
  }
  return (
    <div className='container'>
      <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and efficiently.Be it word count,character count or
            </div>
          </div>
        </div>
        <div className="accordion-item"  style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>It is a free counter tool</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item"  style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              It is compatible with any web browser such as Chrome,Firefox,Internet Explorer etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
    <button  onClick={toggleStyle} className="btn btn-success">{btntext}</button>
</div> */}
    </div>
  )
}
