import useCountries from "../hooks/useCountries";

const CountryGrid = () => {
  const { countries, error } = useCountries();
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    </>
  );
};

export default CountryGrid;
