import React from "react";
import { TMenu } from "./interfaces";

interface Props {
  setMenu: React.Dispatch<React.SetStateAction<TMenu>>;
}

const NavBar: React.FC<Props> = (props) => {
  const { setMenu } = props;
  return (
    <div>
      <button onClick={() => setMenu("designs")}>Designs</button>
      <button onClick={() => setMenu("setouts")}>Setouts</button>
    </div>
  );
};

export default NavBar;
