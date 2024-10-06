import DisplayLang from "./DisplayLang";
const OneCountry = (props) => {
  
  return (
    <>
      <p>===============================================</p>
      <h3>{props.country.name.common}</h3>
      <p>capital: {props.country.capital}</p>
      <p>area: {props.country.area}</p>
      <p>languages</p>
      <ul>
        {Object.values(props.country.languages).map((lang, index) => (
          <DisplayLang language={lang} key={index} />
        ))}
      </ul>
      <img src={props.country.flags.png} alt="flag" height="200" width="250" />
      <p>===============================================</p>
    </>
  );
};
export default OneCountry;
