import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useRegion = () => {
  const [regions, setRegions] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Array<{ region: string }>>("/v3.1/all?fields=region", {
        signal: controller.signal,
      })
      .then((res) => {
        const allRegions = res.data.map((item) => item.region);
        const uniqueRegions = [
          ...new Set(allRegions.filter((region) => region)),
        ];
        setRegions(uniqueRegions.sort());
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { regions, error };
};

export default useRegion;
