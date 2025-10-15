import React, { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState(null);
  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="heading">Advice #{advice?.id ?? "..."}</h1>
        <p className="advice">"{advice?.advice ?? "Loading..."}"</p>
        <div className="divider">
          <img src="/images/pattern-divider-desktop.svg" alt="divider" />
        </div>
        <button className="dice-button" onClick={fetchAdvice}>
          <img src="/images/icon-dice.svg" alt="dice" />
        </button>

      </div>
      
    </>
  );
};

export default App;
