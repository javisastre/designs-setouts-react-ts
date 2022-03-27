import React from "react";

import { IDataSection } from "./interfaces";

interface Props {
  section: IDataSection;
}

const DataGridDisplay: React.FC<Props> = (props) => {
  const {
    section: { headers, data },
  } = props;

  return (
    <div className='data-grid-display'>
      <table>
        <thead>
          {headers.map((header, i) => (
            <th key={i} id={String(i)}>
              {header}
            </th>
          ))}
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
