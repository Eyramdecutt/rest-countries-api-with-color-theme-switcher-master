import { useRef } from "react";
import { IoMdSearch } from "react-icons/io";

interface Props {
  onSearch: (searchText: string) => void;
}

const InputSearch = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="lg:w-1/3 flex items-center space-x-3 border-[1px] ring-4 ring-gray-100/60  border-gray-100 rounded-sm p-3">
      <IoMdSearch color="gray" />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <input
          ref={ref}
          type="text"
          placeholder="Search for a country..."
          className="outline-none text-[14px]"
        />
      </form>
    </div>
  );
};

export default InputSearch;
