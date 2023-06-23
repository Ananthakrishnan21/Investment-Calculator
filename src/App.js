import logo from "./assets/investment-calculator-logo.png";
import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const flagControl = () => {
    setData([]);
  };
  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["currentSav"];
    const yearlyContribution = +userInput["yearlySav"];
    const expectedReturn = +userInput["expectInt"] / 100;
    const duration = +userInput["investDur"];
    let totalInterest = 0;
    let capital = currentSavings;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      capital = capital + yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsStartOfYear: capital,
        savingsEndOfYear: currentSavings,
        totalInterests: totalInterest,
        id: Math.random().toString()
      });
    }
    console.log(yearlyData);
    setData(yearlyData);
  };

  return (
    <div>
      <Header logo={logo} />

      <Form calculate={calculateHandler} flag={flagControl} />

      {data.length === 0 && (
        <h2 className="condition">No investment calculation yet.</h2>
      )}
      {data.length > 0 && <Table data={data} />}
    </div>
  );
}

export default App;
