import React from "react";
import CSS from "csstype";

import { IDataObj, ISection } from "./interfaces";

interface Props {
  section: ISection;
}

const gridStyles: CSS.Properties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gridAutoFlow: "column",
};

const headerStyle: CSS.Properties = {
  fontWeight: "bold",
};

const DataGridDisplay: React.FC<Props> = (props) => {
  const {
    section: { headers, data },
  } = props;

  console.log(data);
  return (
    <div>
      <table>
        <thead>
          {headers.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              {Object.values(el)
                .slice(1)
                .map((spec) => (
                  <td key={el.id}>{spec}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div id='grid' style={gridStyles}>
        {headers.map((header, i) => (
          <div key={i} style={headerStyle}>
            {header}
          </div>
        ))}
        {data.map((row, i) => (
          <div key={i}>
            <div>{row.name}</div>
            <div>{row.courses}</div>
            <div>{row.updated}</div>
            <div>{row.user}</div>
            <div>{row.wales}</div>
            <div>{row.machineName}</div>
            <div>{row.machineWidth}</div>
          </div>
        ))}

       {data.map((data) => (
          <div key={data.id}>
            <div>{data.name}</div>
            <div>{data.courses}</div>
            <div>{data.wales}</div>
            <div>{data.updated}</div>
            <div>{data.user}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default DataGridDisplay;
