import { BsMoon } from "react-icons/bs";

const NavBar = () => {
  return (
    <div
      className="border-[1px] border-transparent shadow-sm bg-darkBlue
     py-5"
    >
      <div className="px-4 md:px-8 xl:px-20 flex justify-between">
        <h1 className="font-bold">Where in the world?</h1>
        <div className="flex items-center space-x-2">
          <BsMoon size="14" />
          <p className="text-sm">Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
