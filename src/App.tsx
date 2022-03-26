// Package import
import React, { useState, useEffect } from "react";
import axios from "axios";

// component & interface import
import DataGridDisplay from "./components/DataGridDisplay";
import NavBar from "./components/NavBar";
import {
  IDataObj,
  IServerDataObj,
  IServerUserObj,
  IUserObj,
  IDataBase,
} from "./components/interfaces";

// helpers & initialisers
import {
  initialDesigns,
  initialSetouts,
  initialUsers,
} from "./components/setup";
import {
  formatDate,
  formatMachineName,
  getNameInitials,
} from "./components/helperFunctions";

// env file data
const SERVER_URL = "http://localhost:5000/";

// App component
const App: React.FC = () => {
  const [isDesignsMenu, setIsDesignsMenu] = useState<Boolean>(true);
  const [dataBase, setDataBase] = useState<IDataBase>({
    designs: initialDesigns,
    setouts: initialSetouts,
    users: initialUsers,
  });

  const loadUserData = async () => {
    try {
    } catch (err) {
      console.log();
    }
  };

  useEffect(() => {
    // asynchronous data fetching
    const getAllData = async () => {
      try {
        const { data: rawUsers } = await axios.get<IServerUserObj[]>(
          `${SERVER_URL}users`
        );

        const formattedUsers: IUserObj[] = rawUsers.map(
          (user: IServerUserObj) => ({
            id: Number(user.id),
            name: user.name,
          })
        );

        const { data: rawDesigns } = await axios.get<IServerDataObj[]>(
          `${SERVER_URL}designs`
        );
        const { data: rawSetouts } = await axios.get<IServerDataObj[]>(
          `${SERVER_URL}setouts`
        );

        // data objects casting
        const formattedDesigns: IDataObj[] = rawDesigns.map(
          (design: IServerDataObj) => ({
            id: Number(design.id),
            name: design.name,
            courses: Number(design.courses),
            wales: Number(design.wales),
            updated: formatDate(design.updated),
            user: getNameInitials(
              Number(design.user_id_last_update),
              formattedUsers
            ),
          })
        );

        const formattedSetouts: IDataObj[] = rawSetouts.map(
          (setout: IServerDataObj) => ({
            id: Number(setout.id),
            name: setout.name,
            machineName: formatMachineName(String(setout.machine_name)),
            machineWidth: Number(setout.machine_width),
            courses: Number(setout.courses),
            updated: formatDate(setout.updated),
          })
        );
        setDataBase({
          ...dataBase,
          setouts: {
            ...dataBase.setouts,
            data: formattedSetouts,
          },
          designs: {
            ...dataBase.designs,
            data: formattedDesigns,
          },
          users: {
            ...dataBase.users,
            data: formattedUsers,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };

    getAllData();
  }, []);

  return (
    <div className='App'>
      <NavBar setIsDesignsMenu={setIsDesignsMenu} />

      {dataBase && isDesignsMenu ? (
        <DataGridDisplay section={dataBase.designs} />
      ) : (
        <DataGridDisplay section={dataBase.setouts} />
      )}
    </div>
  );
};

export default App;
