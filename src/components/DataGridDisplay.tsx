import React, { ReactPropTypes } from "react";
import dayjs from "dayjs";

import { IDataObj, IUserObj } from "./interfaces";

interface Props {
  data: IDataObj[];
  users?: IUserObj[];
}

const DataGridDisplay: React.FC<Props> = (props) => {
  const { data, users } = props;
  return (
    <div>
      DataGridDisplay:{data.map((d) => d.id)}
      Users: {users?.map((u) => u.name)}
    </div>
  );
};

export default DataGridDisplay;
