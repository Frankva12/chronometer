import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./ControlButtons.css"; // Importa el archivo CSS para estilos

const ControlButtons = ({
  active,
  isPaused,
  handleStart,
  handlePauseResume,
  handleReset,
  handleSetAlarmTime
}) => {
  const [alarmTimeInput, setAlarmTimeInput] = useState("");

  const handleChange = (event) => {
    setAlarmTimeInput(event.target.value);
  };

  const handleClick = () => {
    let alarmTime = parseInt(alarmTimeInput);
    if (isNaN(alarmTime)) {
      alarmTime = 0;
    }
    handleSetAlarmTime(alarmTime);
  };

  return (
    <div className="control-buttons">
      <button className="button start" onClick={handleStart} disabled={active}>
        Start
      </button>
      <button className="button pause" onClick={handlePauseResume} disabled={!active}>
        {isPaused ? "Resume" : "Pause"}
      </button>
      <button className="button reset" onClick={handleReset}>Reset</button>
      <div className="alarm-time">
        <InputMask
          mask="99:99:99"
          type="text"
          placeholder="Alarm time (mm:ss:ms)"
          value={alarmTimeInput}
          onChange={handleChange}
        />
        <button className="button set-alarm" onClick={handleClick}>Set Alarm</button>
      </div>
    </div>
  );
};

export default ControlButtons;
