"use client"
import React, { useState } from 'react'
import AnalogClock from 'analog-clock-react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const page = () => {
const [title, settitle] = useState("")
const [text, settext] = useState("")
const [notes, setnotes] = useState([])


const submitHandler = ()=>{
  const currTime = new Date().toLocaleTimeString();

 
  setnotes([...notes,{title, text}])
  settitle("")
  settext("")
  console.log(notes)

}

let options = {
  "useCustomTime": false,
  "width": "17vmax",


  "border": true,
  "borderColor": "rgba(240, 255, 255, 0.26)",
  "baseColor": "#000000",
  "centerColor": "#000000",
  "centerBorderColor": "#fafafa",
  "handColors": {
    "second": "#ffffff",
    "minute": "#ffffff",
    "hour": "#ffffff"
  }
}


let renderTask = <>
<h4>New note Here</h4>
<p>Note Description</p>
</>

if (title != "" || text != ""){
  renderTask = <>
    <h4>{title}</h4>
    <p>{text}</p>
    </>
}

const renderNotes = notes.slice(0).reverse().map((t,i) => {
  return <>
<div className="note-card">
      <h4>{t.title}</h4>
      <p>{t.text}</p>
      <p className='time'>{currTime}</p>
</div> 
  </>
});



  return (
    <div>
      <div className="main">
        <div className="nav">
          <h4>Notes</h4>
        </div>
        <div className="layout">
          <div className="notespane">
          <AnalogClock {...options} />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider> */}

          </div>
          <div className="note">
            <div className="notes">
            <h4>New Note</h4>
            <div className="newnote">
              <input type="text" className='Note-title' placeholder='New Note here...' value={title} onChange={(e)=>{
                settitle(e.target.value)
              }} />

              <textarea type="text" className='notetext' placeholder='Note description here...' value={text} onChange={(e)=>{
                settext(e.target.value)
              }} />

             
            </div>
            <div className="submit">
              <button onClick={submitHandler}>+</button>
            </div>
            </div>
          <div className="notes">
          <h4>Purane Notes</h4>
            <div className="puranenotes">
              <div className="note-card">
                {renderTask}
              
              </div>
              {renderNotes}

             
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
