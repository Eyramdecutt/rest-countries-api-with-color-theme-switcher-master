import { useEffect, useState } from "react";
import { Country } from "./useCountries";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export type CountryDetail = Country & {
  subregion: string;
  tld: string[];
  currencies: { currency: { name: string } };
  languages: { [key: string]: string };
  borders: string[];
};

export type BorderCountry = Country & {
  cca3: string;
};

const useCountry = (name: string) => {
  const [countries, setCountries] = useState<CountryDetail | null>(null);
  const [borderCountries, setBorderCountries] = useState<BorderCountry[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<CountryDetail[]>(`/v3.1/name/${name}?fullText=true`, {
        signal: controller.signal,
      })
      .then(async (res) => {
        const countryData = res.data[0];
        setCountries(countryData);

        if (countryData.borders && countryData.borders.length > 0) {
          try {
            const bordersResponse = await apiClient.get<BorderCountry[]>(
              `/v3.1/alpha?codes=${countryData.borders.join(",")}`,
              { signal: controller.signal }
            );
            const limitedBorderCountries = bordersResponse.data.slice(0, 3);
            setBorderCountries(limitedBorderCountries);
          } catch (err) {
            if (err instanceof CanceledError) return;
            console.error("Failed to fetch border countries:", err);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [name]);

  return { countries, borderCountries, isLoading, error };
};

export default useCountry;
