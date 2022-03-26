import React from "react";

interface Props {
  setIsDesigns: React.Dispatch<React.SetStateAction<Boolean>>;
}

const NavBar: React.FC<Props> = (props) => {
  const { setIsDesigns } = props;
  return (
    <div>
      <button onClick={() => setIsDesigns(true)}>Designs</button>
      <button onClick={() => setIsDesigns(false)}>Setouts</button>
    </div>
  );
};

export default NavBar;
