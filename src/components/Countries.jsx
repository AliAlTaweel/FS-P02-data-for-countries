import { useState } from "react";
import Weather from "./Weather";
import OneCountry from "./OneCountry";
import DisplayLang from "./DisplayLang";

const Countries = (props) => {
  const [show, setShow] = useState(false);
  const [buttText,setButtText] = useState(false);
  const handleClick = () => {
    {
      console.log("handleClick");
      setShow(!show);
      setButtText(!buttText);
    }
  };
  if (props.length === 1) {
    return (
      <>
        <OneCountry country={props.country} />
        <Weather country={props.country}/>

      </>
    );
  } else {
    return (
      <>
        <li>
          {props.country.name.common}
          <button onClick={handleClick}> {buttText ? "Hide" : "Show"}</button>
          {show && <OneCountry country={props.country} />}
        </li>
      </>
    );
  }
};
export default Countries;
