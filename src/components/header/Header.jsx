import { memo } from "react";
import { HEADER_ACCOUNT_MENU, HEADER_MAIN_MENU } from "../../constants";
import HeaderAccountItem from "./HeaderAccountItem";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="flex p-2 w-full bg-white px-6 md:px-12 shadow sticky top-0 h-20 gap-10 z-20">
      <img
        className="w-14 object-contain"
        src="https://mumbaimirror.indiatimes.com/photo/80601325.cms"
        alt="logo"
      />
      <div className="hidden h-full items-center gap-4 md:flex">
        {HEADER_MAIN_MENU.map((item, index) => (
          <HeaderItem data={item} key={index} />
        ))}
      </div>
      <div className="flex h-full items-center gap-4 ml-auto">
        {HEADER_ACCOUNT_MENU.map((item, index) => (
          <HeaderAccountItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default memo(Header);
