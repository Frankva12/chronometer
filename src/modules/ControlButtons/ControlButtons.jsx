import React from "react";
import "./ControlButtons.css";
  
const ControlButtons = (props) => {
  const StartButton = (
    <div className="btn btn-one btn-start"
         onClick={props.handleStart} style={{ fontWeight: 'bold' }}>
      Start
    </div>
  );

  const AlarmButton = (
    <div className="btn btn-one btn-alarm" type="submit" style={{ fontWeight: 'bold' }}>
      Set Alarm
    </div>
  )

  const InputTime = (
    <div >
      <form className="text-group">
        <p className="text-button" style={{ fontWeight: 'bold' }}>Minute
        <input type="number" className="inputTime" style={{ fontWeight: 'bold' }} min='00' max='99' />
        </p>
        <p className="text-button" style={{ fontWeight: 'bold' }} >Second
        <input type="number" className="inputTime" style={{ fontWeight: 'bold' }} min='00' max='59' />
        </p>
        <p className="text-button" style={{ fontWeight: 'bold' }} >Millisecond
        <input type="number" className="inputTime" style={{ fontWeight: 'bold' }} min='00' max='99' />
        </p>
      </form>
    </div>
  );

  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" 
           onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
      
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div>{InputTime}</div>
      <div>{props.active ? ActiveButtons : StartButton} </div>
      <div>{AlarmButton}</div>
    </div>
  );
}

export default ControlButtons;
