import "./ControlButtons.css"; // Importa el archivo CSS para estilos

const ControlButtons = ({
  active,
  isPaused,
  handleStart,
  handlePauseResume,
  handleReset
}) => {

  return (
    <div className="control-buttons">
      <button className="button reset" onClick={handleReset}>Reset</button>
      <button className="button pause" onClick={handlePauseResume} disabled={!active}>
        {isPaused ? "Resume" : "Pause"}
      </button>
      <button className="button start" onClick={handleStart} disabled={active}>
        Start
      </button>
    </div>
  );
};

export default ControlButtons;
