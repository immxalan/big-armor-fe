import React from "react";
import { Radar } from "react-chartjs-2";

function Graph() {
  const dummyData = [
    {
      text: "I love pizza!",
      results: {
        toxic: {
          prediction: false,
          probability: 0.07071,
        },
        severe_toxic: {
          prediction: false,
          probability: 0.00329,
        },
        obscene: {
          prediction: false,
          probability: 0.00152,
        },
        threat: {
          prediction: false,
          probability: 0.03545,
        },
        insult: {
          prediction: false,
          probability: 0.00747,
        },
        identity_hate: {
          prediction: false,
          probability: 0.00285,
        },
      },
    },
    {
      text: "I hate the color brown.",
      results: {
        toxic: {
          prediction: true,
          probability: 0.79828,
        },
        severe_toxic: {
          prediction: false,
          probability: 0.02829,
        },
        obscene: {
          prediction: false,
          probability: 0.03187,
        },
        threat: {
          prediction: false,
          probability: 0.17269,
        },
        insult: {
          prediction: false,
          probability: 0.18975,
        },
        identity_hate: {
          prediction: false,
          probability: 0.2742,
        },
      },
    },
  ];

  const dataLabelCreater = (data: any) => {
    return Object.keys(data[0].results);
  };

  const dataSetCreater = (dataSet: any, labels: any) => {
    let newDataSet: {
      label: any;
      backgroundColor: string;
      borderColor: string;
      data: Array<number>;
    } = {
      label: dataSet.text,
      backgroundColor: "rgba(194, 116, 161, 0.5)",
      borderColor: "rgb(194, 116, 161)",
      data: [],
    };

    // rename dummyData to data
    labels.forEach((item: any) => {
      newDataSet.data.push(Math.round(dataSet.results[item].probability * 100));
    });

    return newDataSet;
  };

  const dataRadarCreater = (data: any) => {
    let newDataRadar: {
      labels: any;
      datasets: Array<any>;
    } = {
      labels: dataLabelCreater(data),
      datasets: [],
    };

    data.forEach((dataset: any) => {
      newDataRadar.datasets.push(dataSetCreater(dataset, newDataRadar.labels));
    });

    return newDataRadar;
  };

  let dataRadar = dataRadarCreater(dummyData);

  console.log(dataRadar);

  return (
    <div>
      <p>this will be our graph component</p>
      <h3 className="mt-5">Radar chart</h3>
      <Radar data={dataRadar} options={{ responsive: true }} />
    </div>
  );
}

export default Graph;
