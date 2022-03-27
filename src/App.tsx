import React, { useState, useEffect } from "react";

// component & interface import
import DataGridDisplay from "./components/DataGridDisplay";
import NavBar from "./components/NavBar";
import { IDataObj, IDataBase } from "./components/interfaces";

// helpers & initialisers
import {
  initialDesigns,
  initialSetouts,
  initialUsers,
  initialMenu,
  menuList,
} from "./components/setup";
import { loadData } from "./components/helperFunctions";

// styles
import "./styles/App.css";

// App component
const App: React.FC = () => {
  const [menu, setMenu] = useState<string>(initialMenu);
  const [dataBase, setDataBase] = useState<IDataBase>({
    designs: initialDesigns,
    setouts: initialSetouts,
    users: initialUsers,
  });

  useEffect(
    () => {
      const getData = async () => {
        try {
          if (menu === "designs") {
            const formattedUsers: IDataObj[] = await loadData(
              "users",
              dataBase.users.data
            );
            const formattedDesigns: IDataObj[] = await loadData(
              "designs",
              formattedUsers
            );
            setDataBase((d) => ({
              ...d,
              users: {
                ...d.users,
                data: formattedUsers,
              },
              designs: {
                ...d.designs,
                data: formattedDesigns,
              },
            }));
          } else if (menu === "setouts") {
            const formattedSetouts: IDataObj[] = await loadData(
              "setouts",
              dataBase.users.data
            );
            setDataBase((d) => ({
              ...d,
              setouts: {
                ...d.setouts,
                data: formattedSetouts,
              },
            }));
          }
        } catch (err) {
          console.log(err);
        }
      };

      getData();
    },
    // eslint-disable-next-line
    [menu]
  );

  return (
    <div className='App'>
      <NavBar setMenu={setMenu} menu={menu} menuList={menuList} />
      {dataBase &&
        menuList.map(
          (option, i) =>
            menu === option && (
              <DataGridDisplay
                key={i}
                section={dataBase[option as keyof IDataBase]}
              />
            )
        )}
    </div>
  );
};

export default App;
