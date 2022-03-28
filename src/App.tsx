import React, { useState, useEffect } from "react";

// component & interface import
import DataGridDisplay from "./components/DataGridDisplay";
import NavBar from "./components/NavBar";
import { IDataObj, IDataBase } from "./components/interfaces";
import ErrorAlert from "./components/ErrorAlert";

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
  const [error, setError] = useState<string | null>(null);

  useEffect(
    () => {
      const getData = async () => {
        try {
          if (menu === "designs") {
            const formattedUsers: IDataObj[] | Error = await loadData(
              "users",
              dataBase.users.data
            );

            if (formattedUsers instanceof Error) throw String(formattedUsers);

            const formattedDesigns: IDataObj[] | Error = await loadData(
              "designs",
              formattedUsers
            );

            if (formattedDesigns instanceof Error)
              throw String(formattedDesigns);

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
            const formattedSetouts: IDataObj[] | Error = await loadData(
              "setouts",
              dataBase.users.data
            );

            if (formattedSetouts instanceof Error)
              throw String(formattedSetouts);

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
          setError(String(err));
        }
      };

      getData();
    },
    // eslint-disable-next-line
    [menu]
  );

  return (
    <div className='App'>
      {error && (
        <div>
          <ErrorAlert errorMessage={error} />
        </div>
      )}
      {!error && (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;
