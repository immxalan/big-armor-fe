import React from "react";
import { DataSetCreater } from "../../helpers/CreateRadarData";

function Legend(props: {
  legend: { datasets: { backgroundColor: string; label: string }[] };
}) {
  return (
    <div className="legendAllDataSets">
      {props.legend.datasets.map(
        (dataset: { backgroundColor: string; label: string }, i: number) => {
          return (
            <div key={i} className="legendOneDataSet">
              <div
                style={{ backgroundColor: `${dataset.backgroundColor}` }}
                className="smallBox"
              >
                <p className="paragraphSpacing">{dataset.label}</p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Legend;
