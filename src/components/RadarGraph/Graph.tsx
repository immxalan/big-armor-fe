import React from "react";
import { Radar } from "react-chartjs-2";

function Graph(props: { dataRadar: {} }) {
  return (
    <div className="graphComponent">
      <h3 className="mt-5">Radar chart</h3>
      <Radar
        data={props.dataRadar}
        options={{
          responsive: true,
          legend: { display: false },
        }}
      />
    </div>
  );
}

export default Graph;
