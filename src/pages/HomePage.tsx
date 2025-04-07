import Data from "../components/Data";
import InputSearch from "../components/InputSearch";
import RegionSelector from "../components/RegionSelector";
import CountryGrid from "../components/CountryGrid";
import { useState } from "react";

const HomePage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string | null>(null);
  return (
    <>
      <div className="px-4 md:px-8 xl:px-20 lg:flex lg:justify-between mt-9">
        <InputSearch onSearch={(searchText) => setSearchText(searchText)} />
        <RegionSelector
          onSelectRegion={(region) => setSelectedRegion(region)}
        />
      </div>
      <div>
        <CountryGrid searchText={searchText} selectedRegion={selectedRegion} />
        <Data />
      </div>
    </>
  );
};

export default HomePage;
