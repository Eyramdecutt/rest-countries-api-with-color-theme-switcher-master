import { HiOutlineMoon } from "react-icons/hi";

const NavBar = () => {
  return (
    <div
      className="border-[1px] border-transparent shadow-sm
     py-5"
    >
      <div className="px-4 md:px-8 xl:px-20 flex justify-between">
        <h1 className="font-bold">Where in the world?</h1>
        <div className="flex items-center space-x-2">
          <HiOutlineMoon size="15" />
          <p className="text-sm">Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
