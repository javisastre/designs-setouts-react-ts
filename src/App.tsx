// Package import
import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

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

  useEffect(() => {
    // asynchronous data fetching
    const getAllData = async () => {
      const { data: rawDesigns } = await axios.get<IServerDataObj[]>(
        `${SERVER_URL}designs`
      );
      const { data: rawSetouts } = await axios.get<IServerDataObj[]>(
        `${SERVER_URL}setouts`
      );
      const { data: rawUsers } = await axios.get<IServerUserObj[]>(
        `${SERVER_URL}users`
      );

      // user data management
      const users: IUserObj[] = rawUsers.map((user: IServerUserObj) => ({
        id: Number(user.id),
        name: user.name,
      }));

      // helper formatting functions
      const formatDate = (d: string) => dayjs(d).format("MM[/]D[/]YY");
      const formatMachineName = (m: string) => m.split("_").join(" ");
      const getNameInitials = (id: number) => {
        const user = users.find((u) => u.id === id);
        return user
          ? user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
          : "";
      };

      // data objects casting
      const designs: IDataObj[] = rawDesigns.map((design: IServerDataObj) => ({
        id: Number(design.id),
        name: design.name,
        courses: Number(design.courses),
        wales: Number(design.wales),
        updated: formatDate(design.updated),
        user: getNameInitials(Number(design.user_id_last_update)),
      }));
      setDesignsData(designs);

      const setouts: IDataObj[] = rawSetouts.map((setout: IServerDataObj) => ({
        id: Number(setout.id),
        name: setout.name,
        machineName: formatMachineName(String(setout.machine_name)),
        machineWidth: Number(setout.machine_width),
        courses: Number(setout.courses),
        updated: formatDate(setout.updated),
      }));
      setSetoutsData(setouts);
    };

    getAllData();
  }, []);

  return (
    <div className='App'>
      <NavBar setIsDesignsMenu={setIsDesignsMenu} />

      {designsData && isDesignsMenu ? (
        <DataGridDisplay data={designsData} />
      ) : (
        <DataGridDisplay data={setoutsData} />
      )}
    </div>
  );
};

export default App;
