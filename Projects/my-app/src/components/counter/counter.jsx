import { useState } from "react";
import "./counter.css";
import Logs from "../logs/logs";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [incVal, setIncVal] = useState(0);
  const [decVal, setDecVal] = useState(0);
  const [logs, setLogs] = useState([]);
  const [showLogs, setshowLogs] = useState(false);

  const handleOperation = (event) => {
    if (event.target.id === "value_inc") {
      if (+event.target.value >= 0) {
        setIncVal(+event.target.value);
      }
    } else if (event.target.id === "value_dec") {
      if (+event.target.value >= 0) {
        setDecVal(+event.target.value);
      }
    }
  };
  const deleteLogs = (id) => {
    setLogs(logs.filter((log) => log.id !== id));
  };

  const handleCounter = (operator) => {
    let newVal = null;
    let oldVal = counter;
    if (operator === "+") {
      newVal = counter + incVal;
      setIncVal(0);
    } else if (operator === "-") {
      newVal = counter - decVal;
      setDecVal(0);
    }
    setCounter(newVal);
    //Generat Logs
    const newLog = {
      id: Math.random(),
      value: `Previous Value = ${oldVal}, Value ${
        operator === "+" ? "Added" : "Subtracted"
      } = ${operator === "+" ? incVal : decVal}, New Value = ${newVal}`,
    };
    // console.log(newLog)
    setLogs([...logs, newLog]);
  };

  return (
    <div className="main">
      <div>
        <h1>COUNTER</h1>
      </div>
      <div>
        <h3> value of counter: {counter}</h3>
      </div>
      <div className="buttons">
        <div className="action_section">
          <form action="">
            <input
              type="number"
              value={incVal}
              placeholder="0"
              id="value_inc"
              onChange={(event) => handleOperation(event)}
            />
          </form>
          <button
            className="button button_inc"
            onClick={() => handleCounter("+")}
          >
            Increase
          </button>
        </div>
        <div className="action_section">
          <form action="">
            <input
              type="number"
              value={decVal}
              placeholder="0"
              id="value_dec"
              onChange={(event) => handleOperation(event)}
            />
          </form>
          <button
            className="button button_dec"
            onClick={() => handleCounter("-")}
          >
            Decrease
          </button>
        </div>
      </div>
      {logs.length >= 1 && (
        <div className="logs">
          <button
            className="button button_info"
            onClick={() => setshowLogs(!showLogs)}
            style={{
              backgroundColor: showLogs ? "black" : "#e7e7e7",
              color: showLogs ? "#e7e7e7" : "black",
            }}
          >
            {showLogs ? "Hide" : "Show"} Logs
          </button>
          {showLogs && (
            <div className="logs_container">
              <Logs logsData={logs} deleteLog={(id) => deleteLogs(id)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Counter;
