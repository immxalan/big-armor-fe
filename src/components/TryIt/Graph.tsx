import React from "react";
import { Radar } from "react-chartjs-2";

function Graph() {
  const dummyData = [
    {
      text: "I love pizza!",
      results: {
        toxic: {
          prediction: false,
          probability: 0.37071,
        },
        severe_toxic: {
          prediction: false,
          probability: 0.10329,
        },
        obscene: {
          prediction: false,
          probability: 0.50152,
        },
        threat: {
          prediction: false,
          probability: 0.13545,
        },
        insult: {
          prediction: false,
          probability: 0.50747,
        },
        identity_hate: {
          prediction: false,
          probability: 0.90285,
        },
      },
    },
    {
      text: "I think the color brown.",
      results: {
        toxic: {
          prediction: true,
          probability: 0.39828,
        },
        severe_toxic: {
          prediction: false,
          probability: 0.62829,
        },
        obscene: {
          prediction: false,
          probability: 0.83187,
        },
        threat: {
          prediction: false,
          probability: 0.47269,
        },
        insult: {
          prediction: false,
          probability: 0.88975,
        },
        identity_hate: {
          prediction: false,
          probability: 0.5742,
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
          probability: 0.32829,
        },
        obscene: {
          prediction: false,
          probability: 0.93187,
        },
        threat: {
          prediction: false,
          probability: 0.67269,
        },
        insult: {
          prediction: false,
          probability: 0.38975,
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

  const dataSetCreater = (dataSet: any, labels: any, color: any) => {
    let newDataSet: {
      label: any;
      backgroundColor: string;
      borderColor: string;
      data: Array<number>;
    } = {
      label: dataSet.text,
      backgroundColor: `rgba(${color}, 0.5)`,
      borderColor: `rgb(${color})`,
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

    let colors: Array<any> = [
      "139,0,0",
      "119,136,153",
      "210,105,30",
      "255,105,180",
      "32,178,170",
      "25,25,112",
      "47,79,79",
      "138,43,226",
      "50,205,50",
      "160,82,45",
      "75,0,130",
      "34,139,34",
      "100,149,237",
      "255,215,0",
      "188,143,143",
      "250,128,114",
      "255,127,80",
      "0,128,128",
    ];

    data.forEach((dataset: any, i: any) => {
      newDataRadar.datasets.push(
        dataSetCreater(dataset, newDataRadar.labels, colors[i])
      );
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
