import React, { useState, useEffect } from "react";
import "./StopWatch.css";
import { Timer } from "../Timer";
import { ControlButtons } from "../ControlButtons";
import { AlarmButtons } from "../AlarmButtons";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [alarmTime, setAlarmTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  useEffect(() => {
    if (time >= alarmTime && alarmTime !== 0) {
      alert(`¡Alarma! Se ha alcanzado el tiempo de ${alarmTime} milisegundos.`);
      setIsActive(false);
      setTime(0);
      setIsPaused(true);
    }
  }, [time, alarmTime]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => setIsPaused(!isPaused);

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const handleSetAlarmTime = (alarmTime) => {
    if (alarmTime === 0) {
      alert("Please put some value")
    }else{
      alert("Alarm is set")
      setAlarmTime(alarmTime);
    }
  };

  return (
    <div className="stop-watch">
      <AlarmButtons handleSetAlarmTime={handleSetAlarmTime}/>
      <Timer time={time} />
      <div className="control-buttons">
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
};

export default StopWatch;
