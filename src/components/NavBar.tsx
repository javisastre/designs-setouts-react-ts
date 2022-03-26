import React from "react";

interface Props {
  setIsDesignsMenu: React.Dispatch<React.SetStateAction<Boolean>>;
}

const NavBar: React.FC<Props> = (props) => {
  const { setIsDesignsMenu } = props;
  return (
    <div>
      <button onClick={() => setIsDesignsMenu(true)}>Designs</button>
      <button onClick={() => setIsDesignsMenu(false)}>Setouts</button>
    </div>
  );
};

export default NavBar;
