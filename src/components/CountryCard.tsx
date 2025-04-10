import { Link } from "react-router-dom";
import { Country } from "../hooks/useCountries";
import FormattedNumber from "./FormattedNumber";

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
        <Link
          to={"/country/" + country.name.common}
          className="font-bold text-[14px] pb-2"
        >
          {country.name.common}
        </Link>
        <div className="text-[12px] mt-2 space-y-0.5">
          <p>
            <span className="font-bold">Population: </span>
            <FormattedNumber
              value={country.population}
              className="text-gray-700"
            />
          </p>
          <p>
            <span className="font-bold">Region:</span>{" "}
            <span className="text-gray-700">{country.region}</span>
          </p>
          <p>
            <span className="font-bold">Capital:</span>{" "}
            <span className="text-gray-700">{country.capital[0]}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
