import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Country {
  name: { common: string };
  flags: { svg: string };
  population: number;
  region: string;
  capital: string[];
}

const useCountries = (selectedRegion: string | null) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const endpoint = selectedRegion
      ? `/v3.1/region/${selectedRegion}?fields=name,flags,population,capital,region`
      : "/v3.1/all?fields=name,flags,population,capital,region";

    apiClient
      .get<Country[]>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [selectedRegion]);

  return { countries, error };
};

export default useCountries;
