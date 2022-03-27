import dayjs from "dayjs";
import axios from "axios";

import { IDataObj, IServerDataObj, IDataBase } from "./interfaces";
import { dateFormat } from "./setup";
import { SERVER_URL } from "./setup";

// helper formatting functions
export const formatDate = (date: string) => dayjs(date).format(dateFormat);

export const formatMachineName = (machine: string) =>
  machine.split("_").join(" ");

export const getNameInitials = (id: number, users: IDataObj[]) => {
  const user = users.find((user) => user.id === id);
  return user
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "";
};

// asynchronous data fetching
export const loadData = async (sectionName: string, db: IDataBase) => {
  try {
    const { data } = await axios.get<IServerDataObj[]>(
      `${SERVER_URL}${sectionName.toLowerCase()}`
    );
    const finalData: IDataObj[] = data.map((el: IServerDataObj) => ({
      id: Number(el.id),
      name: el.name,
      ...(el.machine_name && {
        machineName: formatMachineName(String(el.machine_name)),
      }),
      ...(el.machine_width && { machineWidth: Number(el.machine_width) }),
      ...(el.courses && { courses: Number(el.courses) }),
      ...(el.wales && { wales: Number(el.wales) }),
      ...(el.updated && { updated: formatDate(String(el.updated)) }),
      ...(el.user_id_last_update && {
        user: getNameInitials(Number(el.user_id_last_update), db.users.data),
      }),
    }));
    return finalData;
  } catch (err) {
    console.log(err);
    const data: IDataObj[] = [];
    return data;
  }
};
