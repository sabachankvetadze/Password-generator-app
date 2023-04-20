import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import iconCopy from "./assets/icon-copy.svg";
import iconCheck from "./assets/icon-check.svg";
import iconArrow from "./assets/icon-arrow-right.svg";

function App() {
  

  const [upp, setUpp] = useState(false);
  const [low, setLow] = useState(false);
  const [num, setNum] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [value, setValue] = useState(10);

  return (
    <main>
      <p className="passwordGen"> Password Generator</p>
      <div className="generator">
        <span></span>
        <div>
          
          <img src={iconCopy} alt="icon-copy" />
        </div>
      </div>
      <section>
        <div className="length">
          <p className="charecterLength">Character Length</p>
          <span className="nubValue"> {value} </span>
        </div>
        <div className="input-slider">
          <input type="range" min="1" max="20"
          value={value}
          onChange={ (event) => setValue(event.target.value)}
          
          />
          <div className="sliderColor" style= {{ width: value / 20 *100 + "%"}} >  </div>
        </div>
        <div className="chooseSection">
          <div className="choose">
            <div style={{ background: upp ? "#A4FFAF": "transparent" }} className="square" onClick={() => setUpp(!upp)}>
              {upp ? (
                <img
                  src={iconCheck}
                  
                  alt="iconCheck"
                  className="checkimg"
                />
              ) : null}
            </div>
            <span className="include"> Include Uppercase Letters </span>
          </div>
          <div className="choose">
            <div style={{ background: low ? "#A4FFAF": "transparent" }}  className="square" onClick={() => setLow(!low)}>
              {low ? (
                <img
                  src={iconCheck}
                  alt="iconCheck"
                  className="checkimg"
                />
              ) : null}
            </div>
            <span className="include"> Include Lowercase Letters </span>
          </div>
          <div className="choose">
            <div style={{ background: num ? "#A4FFAF": "transparent" }} className="square" onClick={() => setNum(!num)}>
              {num ? (
                <img
                  src={iconCheck}
                  alt="iconCheck"
                  className="checkimg"
                />
              ) : null}
            </div>
            <span className="include"> Include Numbers </span>
          </div>
          <div className="choose">
            <div style={{ background: symbol ? "#A4FFAF": "transparent" }} className="square" onClick={() => setSymbol(!symbol)}>
              {symbol ? (
                <img
                  src={iconCheck}
                  alt="iconCheck"
                  className="checkimg"
                />
              ) : null}
            </div>
            <span className="include"> Include Symbols </span>
          </div>
        </div>
        <div className="info">
          <h1 className="strength">STRENGTH </h1>

          <div>
            <span className="strengthInifo"> TOO WEAK!</span>
          </div>
          <div className="reflect-sec">
            <div className="reflect"></div>
            <div className="reflect"></div>
            <div className="reflect"></div>
            <div className="reflect"></div>
          </div>
        </div>
        <button>
          GENERATE
          <img src={iconArrow} alt="icon-Arrow" />
        </button>
      </section>
    </main>
  );
}

export default App;
