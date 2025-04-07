import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Country {
  name: { common: string };
  flags: { svg: string };
  population: number;
  region: String;
  capital: String;
}

const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Country[]>("/v3.1/all?fields=name,flags,population,capital,region", {
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
  }, []);

  return { countries, error };
};

export default useCountries;
