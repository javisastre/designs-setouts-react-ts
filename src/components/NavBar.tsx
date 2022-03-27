import React from "react";
import { capitalization } from "./helperFunctions";

interface Props {
  setMenu: React.Dispatch<React.SetStateAction<string>>;
  menu: string;
  menuList: string[];
}

const NavBar: React.FC<Props> = (props) => {
  const { setMenu, menu, menuList } = props;
  return (
    <div className='NavBar'>
      {menuList.map((option, i) => (
        <div
          key={i}
          className={`menu-item ${option === menu ? "selected" : ""}`}
          onClick={() => setMenu(option)}
        >
          {capitalization(option)}
        </div>
      ))}
    </div>
  );
};

export default NavBar;
