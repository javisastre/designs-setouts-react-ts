export interface IDataBase {
  designs: IDataSection;
  setouts: IDataSection;
  users: IDataSection;
}

export interface IDataSection {
  name: string;
  headers: string[];
  data: IDataObj[];
}

export interface IDataObj {
  id: number;
  name: string;
  courses?: number;
  updated?: string;
  user?: string;
  wales?: number;
  machineName?: string;
  machineWidth?: number;
}

export interface IServerDataObj {
  id: string;
  name: string;
  courses?: string;
  updated?: string;
  user_id_last_update?: string;
  wales?: string;
  status?: string;
  machine_name?: string;
  machine_width?: string;
}

export type TMenu = "designs" | "setouts";
