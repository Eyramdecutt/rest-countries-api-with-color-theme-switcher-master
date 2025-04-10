import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import useCountry from "../hooks/useCountry";
import FormattedNumber from "../components/FormattedNumber";

const CountryDetailPage = () => {
  const { country: countryName } = useParams<{ country: string }>();

  const { countries, borderCountries, error } = useCountry(countryName!);

  if (!countries) return <div>Countries not found</div>;

  return (
    <div className="px-6 md:px-8 xl:px-20 mt-9 lg:mt-16">
      <div className="border-[1px] ring-3 ring-gray-100/80 border-gray-300 rounded-md p-1 w-[100px] flex justify-center">
        <Link to="/" className="flex items-center">
          <IoIosArrowRoundBack />
          <span className="pl-2 text-gray-700">Back</span>
        </Link>
      </div>

      <div>
        {error && <p>{error}</p>}
        <div className="mt-9 md:mt-16 lg:flex lg:gap-x-10 xl:gap-x-32 lg:items-center">
          <img
            src={countries.flags.svg}
            alt=""
            className="object-cover w-full h-64 lg:h-96 lg:w-1/2"
          />
          <div>
            <div className="lg:flex lg:items-center xl:gap-x-24">
              <div>
                <h2 className="text-3xl font-bold mt-10 lg:mt-0">
                  {countries.name.common}
                </h2>
                <div className="space-y-2">
                  <p className="mt-5">
                    <span className="font-bold">Native Name:</span>{" "}
                    <span className="text-gray-700">
                      {countries.name.nativeName?.eng?.official ||
                        countries.name.common}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">Population:</span>{" "}
                    {/* {countries.population} */}
                    <span className="">
                      <FormattedNumber
                        value={countries.population}
                        className="text-gray-700"
                      />
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">Region:</span>{" "}
                    <span className="text-gray-700">{countries.region}</span>
                  </p>
                  <p>
                    <span className="font-bold">Sub Region:</span>{" "}
                    <span className="text-gray-700">
                      {countries.subregion || "N/A"}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">Capital:</span>{" "}
                    <span className="text-gray-700">
                      {countries.capital?.[0] || "N/A"}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 space-y-2 lg:mb-3">
                <p>
                  <span className="font-bold">Top Level Domain:</span>{" "}
                  <span className="text-gray-700">{countries.tld}</span>
                </p>
                <p>
                  <span className="font-bold">Curriencies:</span>{" "}
                  <span className="text-gray-700">
                    {Object.values(countries.currencies || {})
                      .map((c) => c.name)
                      .join(", ") || "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Languages:</span>{" "}
                  <span className="text-gray-700">
                    {Object.values(countries.languages || {})
                      .map((l) => l)
                      .join(", ") || "N/A"}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <h2 className="text-2xl lg:text-[16px] font-bold">
                Border countries:{" "}
              </h2>
              <div className="flex gap-4 mt-3 lg:mt-0">
                {borderCountries.map((border) => (
                  <Link
                    to={"/country/" + border.name.common}
                    className="border-[2px] border-gray-200 hover:bg-gray-100 rounded-sm ring-[0.5px] ring-gray-100/80 p-1  px-2 lg:w-[115px] text-center text-gray-700"
                  >
                    {border.name.common}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
