import React, { useState } from "react";
import countryData from "../../resources/countryData.json";

function AutoComplete() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
//   console.log(countryData)

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const allSuggestions = countryData.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(allSuggestions);
  };



  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type here..."
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <p
              key={index}
            >
              {suggestion.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
