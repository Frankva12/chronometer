import React, { useState } from "react";
import "./ControlButtons.css";
  
const ControlButtons = (props) => {
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  const [mil, setMil] = useState("");

  const StartButton = (
    <button className="btn btn-one btn-start" onClick={props.handleStart} style={{ fontWeight: 'bold' }}>
      Start
    </button>
  );

  const AlarmButton = (
    <button className="btn btn-one btn-alarm" type="submit" style={{ fontWeight: 'bold' }}>
      Set Alarm
    </button>
  )

  function handleSubmit(e) {
    e.preventDefault();
    if (min === "" && sec === "" && mil === "") {
      alert(`Please indicate the time that you want`);
    }else{
      alert(`Alarm set in: \n${min} minutes ${sec} seconds ${mil} miliseconds`);
      props.handleAlarm([min, sec, mil]);
    }
  }

  const InputTime = (
    <div className="text-group">
      <p className="text-button" style={{ fontWeight: 'bold' }}>Minute
        <input type="number" onChange={(e)=>setMin(e.target.value)} className="inputTime" style={{ fontWeight: 'bold' }} min='00' max='99' name="min" />
      </p>
      <p className="text-button" style={{ fontWeight: 'bold' }} >Second
        <input type="number" onChange={(e)=>setSec(e.target.value)} className="inputTime" style={{ fontWeight: 'bold' }} min='00' max='59' name="sec" />
      </p>
      <p className="text-button" style={{ fontWeight: 'bold' }} >Millisecond
        <input type="number" onChange={(e)=>setMil(e.target.value)} className="inputTime" style={{ fontWeight: 'bold' }} min='00' max='99' name="milsec" />
      </p>
    </div>
  );

  const ActiveButtons = (
    <div className="btn-grp">
      <button variant="success" className="btn btn-two" style={{ fontWeight: 'bold' }} onClick={props.handleReset}>
        Reset
      </button>
      <button className="btn btn-one" style={{ fontWeight: 'bold' }}  onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>   
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton} </div>
      <form onSubmit={handleSubmit}>
        <div>{AlarmButton}</div>
        <div>{InputTime}</div>
      </form>
    </div>
  );
}

export default ControlButtons;
