import React from "react";

import { IDataObj } from "./interfaces";

interface Props {
  data: IDataObj[];
}

const DataGridDisplay: React.FC<Props> = (props) => {
  const { data } = props;
  return <div>DataGridDisplay:{data.map((d) => d.id)}</div>;
};

export default DataGridDisplay;
