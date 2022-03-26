import React from "react";
import CSS from "csstype";

import { IDataSection } from "./interfaces";

interface Props {
  section: IDataSection;
}

const headerStyle: CSS.Properties = {
  fontWeight: "bold",
};

const DataGridDisplay: React.FC<Props> = (props) => {
  const {
    section: { headers, data },
  } = props;

  return (
    <div>
      <table>
        <thead style={headerStyle}>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <tr key={i}>
              {Object.values(el)
                .slice(1)
                .map((spec, k) => (
                  <td key={k}>{spec}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGridDisplay;
