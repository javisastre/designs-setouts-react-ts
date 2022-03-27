import React from "react";

import { IDataSection } from "./interfaces";
import UserBall from "./UserBall";

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
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <tr key={i}>
              {Object.entries(el)
                .slice(1)
                .map((spec, k) => (
                  <td key={k}>
                    {spec[0] === "user" ? <UserBall user={spec[1]} /> : spec[1]}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGridDisplay;
