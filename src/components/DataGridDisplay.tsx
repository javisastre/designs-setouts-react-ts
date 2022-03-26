import React from "react";

interface Props {
  someName: string;
}

const DataGridDisplay: React.FC<Props> = (props) => {
  const { someName } = props;
  return <div>DataGridDisplay: {someName}</div>;
};

export default DataGridDisplay;
