import dayjs from "dayjs";

import { IUserObj } from "./interfaces";
import { dateFormat } from "./setup";

// helper formatting functions
export const formatDate = (date: string) => dayjs(date).format(dateFormat);

export const formatMachineName = (machine: string) =>
  machine.split("_").join(" ");

export const getNameInitials = (id: number, users: IUserObj[]) => {
  const user = users.find((user) => user.id === id);
  return user
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "";
};
