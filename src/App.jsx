import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [contries, setContries] = useState([]);
  const [countriesRe, setCountriesRe] = useState([]);
  const [val, setVal] = useState("");

  const handleChange = (event) => {
    setVal(event.target.value.trim());
  };
  useEffect(() => {
    if (val !== "") {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`) // Get all countries
        .then((response) => {
          // Filter countries to find ones that contain the "val" anywhere in the name
          const filteredCountries = response.data.filter((country) =>
            country.name.common.toLowerCase().includes(val.toLowerCase())
          );
          setContries(filteredCountries.map((country) => country.name.common)); // Set matching country names
        })
        .catch((error) => {
          console.error("Error fetching countries:", error);
        });
    }
  }, [val]);

  return (
    <div>
      <p>find countries</p>

      <input type="text" onChange={handleChange} />
      <Countries contries={contries} />
    </div>
  );
};

export default App;
