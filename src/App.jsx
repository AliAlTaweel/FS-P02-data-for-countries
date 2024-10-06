import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [contries, setContries] = useState([]);
  const [countriesRe, setCountriesRe] = useState([]);
  const [val, setVal] = useState("");
  const [show, setShow] = useState(false);
  const [showNote, setShowNote] = useState(false);

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
          if (filteredCountries.length > 10) {
            setShowNote(true);
            setShow(true);
          } else {
            setShowNote(false);
            setShow(false);
            setContries(filteredCountries.map((country) => country)); // Set matching country names
          }
        })
        .catch((error) => {
          console.error("Error fetching countries:", error);
        });
    } else {
      setShowNote(false);
      setContries([]);
    }
  }, [val]);

  return (
    <div>
      <p>find countries</p>
      <input type="text" onChange={handleChange} />
      {showNote && <p>Too many matches, specify another filter</p>}
      <ul>
        {contries.map((ele, index) => (
          <Countries
            key={index}
            country={ele}
            length={contries.length}
            conuntries={Countries}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
