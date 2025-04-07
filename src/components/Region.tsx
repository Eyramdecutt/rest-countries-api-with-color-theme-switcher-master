const Region = () => {
  return (
    <form className="border-[1px] ring-4 ring-gray-100/60 border-gray-100 rounded-sm p-3 mt-10 lg:mt-0 w-2/3 md:w-1/3 lg:w-auto">
      <select name="" id="" className="outline-none text-[14px] font-semibold">
        <option value="">Filter by Region</option>
        <option value="">Africa</option>
        <option value="">America</option>
        <option value="">Asia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select>
    </form>
  );
};

export default Region;
