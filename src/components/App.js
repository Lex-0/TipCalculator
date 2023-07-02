import React from "react-dom";
import "../styles.css";
import { useEffect, useState } from "react";

function App() {
  const [Number, setNumber] = useState("");
  const [Person, setPerson] = useState("");
  const [TipMount, setTipMount] = useState("0.00");
  const [Total, setTotal] = useState("0.00");
  const [ErrorA, setErrorA] = useState(false);
  const [ErrorB, setErrorB] = useState(false);

  useEffect(() => {}, []);

  const handleKeyUpNumber = (e) => {
    const inputValue = e.target.value;
    const NunmberResult = inputValue.replace(/[A-z]/g, "");
    setNumber(NunmberResult);

    if (Number === "") {
      setErrorA("can`t be blank", true);
    } else {
      setErrorA("");
    }
  };

  const handleKeyUpPerson = (e) => {
    const inputValue = e.target.value;
    const PersonResult = inputValue.replace(/[A-z]/g, "");
    setPerson(PersonResult);

    if (Person === "") {
      setErrorB("can`t be blank", true);
    } else {
      setErrorB();
    }
  };
  /* calculate with 5% */
  const OperationFive = () => {
    const Btn1 = document.getElementById("btn-1");
    const BtnR = document.getElementById("btn-R");

    if (Person === 0 || Person === "") {
      setErrorB("can`t be blank", true);
      return;
    } else {
      Btn1.classList.add("btn-click");
      BtnR.classList.add("btn-reset-click");
    }
    /* calculating tip amount  */
    const porcentaje = (Number * 0.05) / Person;
    const porcentajeResult = porcentaje.toFixed(2).toString().substring(0, 4);

    /* calculating Total  */
    const total = Number / Person + porcentaje;
    const totalResult = total.toFixed(2).toString().substring(0, 5);

    setTipMount(porcentajeResult);
    setTotal(totalResult);
  };

  /* calculate with 10% */
  const OperationTeen = () => {
    const Btn2 = document.getElementById("btn-2");
    const BtnR = document.getElementById("btn-R");

    if (Person === 0 || Person === "") {
      setErrorB("can`t be blank", true);
      return;
    } else {
      Btn2.classList.add("btn-click");
      BtnR.classList.add("btn-reset-click");
    }
    /* calculating tip amount  */
    const porcentaje = (Number * 0.1) / Person;
    const porcentajeResult = porcentaje.toFixed(2).toString().substring(0, 4);

    /* calculating Total  */
    const total = Number / Person + porcentaje;
    const totalResult = total.toFixed(2).toString().substring(0, 5);

    setTipMount(porcentajeResult);
    setTotal(totalResult);
  };

  /* calculate with 15% */
  const OperationFifteen = () => {
    const Btn3 = document.getElementById("btn-3");
    const BtnR = document.getElementById("btn-R");

    if (Person === 0 || Person === "") {
      setErrorB("can`t be blank", true);
      return;
    } else {
      Btn3.classList.add("btn-click");
      BtnR.classList.add("btn-reset-click");
    }
    /* calculating tip amount  */
    const porcentaje = (Number * 0.15) / Person;
    const porcentajeResult = porcentaje.toFixed(2).toString().substring(0, 4);

    /* calculating Total  */
    const total = Number / Person + porcentaje;
    const totalResult = total.toFixed(2).toString().substring(0, 5);

    setTipMount(porcentajeResult);
    setTotal(totalResult);
  };

  /* calculate with 25% */
  const OperationTwentyFive = () => {
    const Btn4 = document.getElementById("btn-4");
    const BtnR = document.getElementById("btn-R");

    if (Person === 0 || Person === "") {
      setErrorB("can`t be blank", true);
      return;
    } else {
      Btn4.classList.add("btn-click");
      BtnR.classList.add("btn-reset-click");
    }
    /* calculating tip amount  */
    const porcentaje = (Number * 0.25) / Person;
    const porcentajeResult = porcentaje.toFixed(2).toString().substring(0, 5);

    /* calculating Total  */
    const total = Number / Person + porcentaje;
    const totalResult = total.toFixed(2).toString().substring(0, 6);

    setTipMount(porcentajeResult);
    setTotal(totalResult);
  };

  /* calculate with 50% */
  const OperationTwentyFifty = () => {
    const Btn5 = document.getElementById("btn-5");
    const BtnR = document.getElementById("btn-R");

    if (Person === 0 || Person === "") {
      setErrorB("can`t be blank", true);
      return;
    } else {
      Btn5.classList.add("btn-click");
      BtnR.classList.add("btn-reset-click");
    }
    /* calculating tip amount  */
    const porcentaje = (Number * 0.5) / Person;
    const porcentajeResult = porcentaje.toFixed(2).toString().substring(0, 5);

    /* calculating Total  */
    const total = Number / Person + porcentaje;
    const totalResult = total.toFixed(2).toString().substring(0, 6);

    setTipMount(porcentajeResult);
    setTotal(totalResult);
  };

  const handleReset = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Number) {
      return;
    } else if (!Person) {
      return;
    }
  };

  return (
    <div className="content">
      <div className="content-icon">
        <img src="assets/logo.svg" alt="text" className="icon" />
      </div>
      <div className="content-calculator">
        <div className="content-operations">
          <div className="operations">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="content-span">
                  <span>Bill</span>
                  {ErrorA && <p>{ErrorA}</p>}
                </div>

                <div>
                  <input
                    placeholder="0"
                    className={ErrorA && !Number ? "input-inv" : "input"}
                    onKeyUp={handleKeyUpNumber}
                    value={Number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="content-span">
                  <span>Select Tip%</span>
                </div>

                <div className="content-btn">
                  <button className="btn" id="btn-1" onClick={OperationFive}>
                    5%
                  </button>
                  <button className="btn" id="btn-2" onClick={OperationTeen}>
                    10%
                  </button>
                  <button className="btn" id="btn-3" onClick={OperationFifteen}>
                    15%
                  </button>

                  <button
                    className="btn"
                    id="btn-4"
                    onClick={OperationTwentyFive}
                  >
                    25%
                  </button>
                  <button
                    className="btn"
                    id="btn-5"
                    onClick={OperationTwentyFifty}
                  >
                    50%
                  </button>
                  <input className="custom" placeholder="Custom"></input>
                </div>
                <div>
                  <div className="content-span">
                    <span>Number of People</span>
                    {ErrorB && <p>{ErrorB}</p>}
                  </div>

                  <div>
                    <input
                      placeholder="0"
                      className={ErrorB && !Person ? "input-inv" : "input-icon"}
                      onKeyUp={handleKeyUpPerson}
                      value={Person}
                      onChange={(e) => setPerson(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="content-result">
          <div className="result">
            <div className="content-total">
              <div className="content-TipAmount">
                <span className="tip">Tip Amount</span>
                <br />
                <span className="person">/person</span>
              </div>
              <div className="amount">
                <span>${TipMount}</span>
              </div>
            </div>
            <div className="content-total">
              <div className="content-TipAmount">
                <span className="tip">Total </span>
                <br />
                <span className="person">/person</span>
              </div>
              <div className="amount">
                <span>${Total}</span>
              </div>
            </div>

            <div>
              <button className="btn-reset" id="btn-R" onClick={handleReset}>
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
