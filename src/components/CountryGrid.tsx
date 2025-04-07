import useCountries from "../hooks/useCountries";
import CountryCard from "./CountryCard";

interface Props {
  selectedRegion: String | null;
}

const CountryGrid = ({ selectedRegion }: Props) => {
  const { countries, error } = useCountries(selectedRegion);
  return (
    <div className="px-4 md:px-8 xl:px-20">
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 p-6 md:p-0 mt-4 md:mt-10">
        {countries?.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryGrid;
