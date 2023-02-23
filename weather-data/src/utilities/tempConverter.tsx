import React, { useState } from "react";
import "./TempConverter.css"

// Define the for props for the the TempConverter componenet
interface TempConverterProps {
  temperature: number;
}

const TempConverter = ({ temperature}: TempConverterProps) => {

  // Set up state for temperature unit state
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  // Handle temperature converter button 
  const handleSwitch = () => {
    setIsFahrenheit(!isFahrenheit);
  };

  // Convert the temperature to Fahrenheit or Celsius based on the temperature unit state
  const convertedTemp = isFahrenheit ? temperature * 1.8 + 32 : temperature;

  return (
    <div className="temp-converter">
          <button onClick={handleSwitch}>
        {isFahrenheit ? "Switch to Celsius" : "Switch to Fahrenheit"}
      </button>
      <span>
        {convertedTemp.toFixed(2)}&deg; {isFahrenheit ? "F" : "C"}
      </span>
  
    </div>
  );
};

export default TempConverter;
