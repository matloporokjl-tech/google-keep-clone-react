import {useState} from "react";
import "./Notes.css";

function Notes({note={}}) {
  const [color, setColor] =useState(note.color || "#66c5cc");
  const [pinned,setPinned] =useState(note.pinned || "false");

  const colors =[
    "#ffffff",
    "#f6cf71",
    "#f89c74",
    "#dcb0f2",
    "#87c55f",
    "#fe88b1",
    "#9eb9f3",
  ];
  return(
    
    <div className ="notes">
      <div className ="note" id={note.id} style={{backgroundColor:color}}>

        <button className="pin-button" onClick={() => setPinned(!pinned)}
        title={pinned ? "Unpin note" : "Pin note"}
        aria-label={pinned ? "Unpin note" : "Pin note"}>

          <span className="material-symbols-outlined">push_pin</span>
        </button>

      <div className="title">{note.title ||""}</div>
      <div className="text">{note.text ||""}</div>

      <div className="note-footer">
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">add_alert</span>
          <span className="tooltip-text">Reminder</span>

          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">palette</span>
            <span className="tooltip-text">Change Color</span>
            <div className="color-options">
              {colors.map((item)=> (
              <button
              key={item} 
              className="color-option"
              style={{backgroundColor:item}}
              onClick={() => setColor (item)}
              aria-label={'Change color to ${item'} 
              />
  ))}
      </div>
      </div>

      <div className="tooltip">
        <span className="material-symbols-outlined hover small-icon">image</span>
        <span className="tooltip-text">Add image</span>
        </div>
        <div className="tooltip achive">
          <span className="material-symbols-outlined hover small-icon">archive</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">more_vert</span>
            <span className="tooltip-text">More</span>

            </div>
            </div>
            </div>
            </div>
  );
}

export default Notes;
  
