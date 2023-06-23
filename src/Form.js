import { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  const [inputValues, setInputValues] = useState({
    currentSav: "",
    yearlySav: "",
    expectInt: "",
    investDur: ""
  });
  const sharedHandler = (identifier, value) => {
    if (identifier === "current") {
      setInputValues((prev) => ({ ...prev, currentSav: value }));
    } else if (identifier === "yearly") {
      setInputValues((prev) => ({ ...prev, yearlySav: value }));
    } else if (identifier === "interest") {
      setInputValues((prev) => ({ ...prev, expectInt: value }));
    } else {
      setInputValues((prev) => ({ ...prev, investDur: value }));
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.calculate(inputValues);
  };
  const resetHandler = (event) => {
    setInputValues({
      currentSav: "",
      yearlySav: "",
      expectInt: "",
      investDur: ""
    });
    props.flag();
  };
  return (
    <form
      className={style.form}
      onSubmit={submitHandler}
      onReset={resetHandler}
    >
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={inputValues.currentSav}
            type="number"
            id="current-savings"
            onChange={(event) => {
              sharedHandler("current", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={inputValues.yearlySav}
            type="number"
            id="yearly-contribution"
            onChange={(event) => {
              sharedHandler("yearly", event.target.value);
            }}
          />
        </p>
      </div>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={inputValues.expectInt}
            type="number"
            id="expected-return"
            onChange={(event) => {
              sharedHandler("interest", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={inputValues.investDur}
            type="number"
            id="duration"
            onChange={(event) => {
              sharedHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className={style["actions"]}>
        <button type="reset" className={style["buttonAlt"]}>
          Reset
        </button>
        <button type="submit" className={style["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
