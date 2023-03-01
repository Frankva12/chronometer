import React, { useState } from "react";
import "./AlarmButtons.css"; // Importa el archivo CSS para estilos

const AlarmButtons = ({
  handleSetAlarmTime
}) => {
  const [alarmTimeInput, setAlarmTimeInput] = useState("");

  const handleChange = (event) => {
    setAlarmTimeInput(event.target.value);
  };

  const handleClick = () => {
    let alarmTime = parseInt(alarmTimeInput);
    console.log(alarmTime);
    if (isNaN(alarmTime)) {
      alarmTime = 0;
    } else { 
      handleSetAlarmTime(alarmTime);
    }
  };

  return (
      <div className="alarm-time">
        <input
          type="number"
          placeholder="Alarm time (mm:ss:ms)"
          value={alarmTimeInput}
          onChange={handleChange}
        />
        <button className="button set-alarm" onClick={handleClick}>Set Alarm</button>
      </div>
  );
};

export default AlarmButtons;
