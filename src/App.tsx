import CountryGrid from "./components/CountryGrid";
import InputSearch from "./components/InputSearch";
import NavBar from "./components/NavBar";
import Region from "./components/Region";

function App() {
  return (
    <>
      <NavBar />
      <div className="px-4 md:px-8 xl:px-20 lg:flex lg:justify-between mt-9">
        <InputSearch />
        <Region />
      </div>
      <div>
        <CountryGrid />
      </div>
    </>
  );
}

export default App;
