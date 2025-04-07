import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Name {
  common: String;
}

interface Flag {
  png: string;
}

interface Countries {
  name: Name;
  flags: Flag;
}

const Data = () => {
  axios
    .get<Countries[]>("https://restcountries.com/v3.1/independent?status=true")
    .then((res) => res.data);
  const { data } = useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      axios
        .get<Countries[]>("https://restcountries.com/v3.1/all")
        .then((res) => res.data),
  });

  console.log(data);

  return <div></div>;
};

export default Data;
