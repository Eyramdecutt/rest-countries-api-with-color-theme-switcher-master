import { useState } from "react";
import CountryGrid from "./components/CountryGrid";
import Data from "./components/Data";
import InputSearch from "./components/InputSearch";
import NavBar from "./components/NavBar";
import RegionSelector from "./components/RegionSelector";

function App() {
  const [selectedRegion, setSelectedRegion] = useState<String | null>(null);
  return (
    <>
      <NavBar />
      <div className="px-4 md:px-8 xl:px-20 lg:flex lg:justify-between mt-9">
        <InputSearch />
        <RegionSelector
          onSelectRegion={(region) => setSelectedRegion(region)}
        />
      </div>
      <div>
        <CountryGrid selectedRegion={selectedRegion} />
        <Data />
      </div>
    </>
  );
}

export default App;
