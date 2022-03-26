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
} from "./components/interfaces";

// env file data
const SERVER_URL = "http://localhost:5000/";

const App: React.FC = () => {
  const [isDesignsMenu, setIsDesignsMenu] = useState<Boolean>(true);
  const [designsData, setDesignsData] = useState<IDataObj[]>([]);
  const [setoutsData, setSetoutsData] = useState<IDataObj[]>([]);
  const [usersData, setUsersData] = useState<IUserObj[]>([]);

  useEffect(() => {
    const getAllData = async () => {
      const { data: rawDesigns } = await axios.get<IServerDataObj[]>(
        `${SERVER_URL}designs`
      );
      const { data: rawSetouts } = await axios.get(`${SERVER_URL}setouts`);
      const { data: rawUsers } = await axios.get(`${SERVER_URL}users`);

      const designs: IDataObj[] = rawDesigns.map((design: IServerDataObj) => ({
        id: Number(design.id),
        name: design.name,
        courses: Number(design.courses),
        updated: new Date(design.updated),
        userIdLastUpdate: Number(design.user_id_last_update),
        wales: Number(design.wales),
        status: design.status,
      }));
      setDesignsData(designs);

      const setouts: IDataObj[] = rawSetouts.map((setout: IServerDataObj) => ({
        id: Number(setout.id),
        name: setout.name,
        courses: Number(setout.courses),
        updated: new Date(setout.updated),
        machineName: setout.machine_name,
        machineWidth: setout.machine_width,
      }));
      setSetoutsData(setouts);

      const users: IUserObj[] = rawUsers.map((user: IServerUserObj) => ({
        id: Number(user.id),
        name: user.name,
      }));
      setUsersData(users);
    };

    getAllData();
  }, []);

  return (
    <div className='App'>
      <NavBar setIsDesignsMenu={setIsDesignsMenu} />

      {designsData && isDesignsMenu ? (
        <DataGridDisplay data={designsData} />
      ) : (
        <DataGridDisplay data={setoutsData} users={usersData} />
      )}
    </div>
  );
};

export default App;
