import { Country } from "../hooks/useCountries";

interface Props {
  country: Country;
}

const CountryCard = ({ country }: Props) => {
  return (
    <div className="border-[1px] border-gray-100 shadow-md rounded-sm overflow-hidden">
      <img
        src={country.flags.svg}
        alt=""
        className="object-cover w-full h-40"
      />
      <div className="p-4 mb-4">
        <p className="font-bold text-[14px] pb-2">{country.name.common}</p>
        <div className="text-[12px]">
          <p>
            <span className="font-semibold">Poupulation:</span>{" "}
            {country.population}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
