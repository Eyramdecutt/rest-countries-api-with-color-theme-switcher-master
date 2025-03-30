import { IoMdSearch } from "react-icons/io";

const InputSearch = () => {
  return (
    <div className="lg:w-1/3 flex items-center space-x-3 border-[1px] ring-4 ring-gray-100/60  border-gray-100 rounded-sm p-3">
      <IoMdSearch color="gray" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="outline-none text-[14px]"
      />
    </div>
  );
};

export default InputSearch;
