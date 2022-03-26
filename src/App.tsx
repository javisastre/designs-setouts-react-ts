import React, { useState } from "react";
import DataGridDisplay from "./components/DataGridDisplay";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  const [isDesigns, setIsDesigns] = useState<Boolean>(true);

  return (
    <div className='App'>
      <NavBar setIsDesigns={setIsDesigns} />

      {isDesigns ? (
        <DataGridDisplay someName='Laia' />
      ) : (
        <DataGridDisplay someName='Jeff' />
      )}
    </div>
  );
};

export default App;
