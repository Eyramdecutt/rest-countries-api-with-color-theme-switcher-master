import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchCountryResponse {
  name: { common: string };
  flags: { png: string };
}

const useCountries = () => {
  const [countries, setCountries] = useState<FetchCountryResponse[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchCountryResponse[]>(
        "/v3.1/independent?status=true&fields=name",
        { signal: controller.signal }
      )
      .then((res) => setCountries(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { countries, error };
};

export default useCountries;
