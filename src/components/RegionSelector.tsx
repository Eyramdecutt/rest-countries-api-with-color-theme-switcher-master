import useRegion from "../hooks/useRegion";

interface Props {
  onSelectRegion: (region: string) => void;
}

const RegionSelector = ({ onSelectRegion }: Props) => {
  const { regions, error } = useRegion();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectRegion(e.target.value);
  };

  return (
    <form className="border-[1px] ring-4 ring-gray-100/60 border-gray-100 rounded-sm p-3 mt-10 lg:mt-0 w-2/3 md:w-1/3 lg:w-auto">
      {error && <p>{error}</p>}
      <select
        name=""
        id=""
        className="outline-none text-[14px] font-semibold"
        onChange={handleChange}
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </form>
  );
};

export default RegionSelector;
