import React from "react";
import Graph from "./RadarGraph/Graph";
import InputForm from "./RadarGraph/InputForm";
import Legend from "./RadarGraph/Legend";
import { DataRadarCreater, DataSetCreater } from "../helpers/CreateRadarData"
import Colors from "../helpers/Colors"
import { MockResponseOne, MockResponseTwo, MockResponseThree } from "../helpers/MockApiResponses"

function RadarGraph() {

  //creates the full dataset with three sets initialised
  let dataRadar: { datasets: { backgroundColor: string, label: string }[], labels: string[] } = DataRadarCreater(MockResponseOne);
  dataRadar.datasets.push(DataSetCreater(MockResponseOne, dataRadar.labels, Colors[dataRadar.datasets.length]))
  dataRadar.datasets.push(DataSetCreater(MockResponseTwo, dataRadar.labels, Colors[dataRadar.datasets.length]))
  dataRadar.datasets.push(DataSetCreater(MockResponseThree, dataRadar.labels, Colors[dataRadar.datasets.length]))

  console.log(dataRadar);


  return (
    <div>
      <p>
        This secion will contain the text area, the graph, and the legend of
        strings
      </p>
      <Graph dataRadar={dataRadar} />
      <InputForm />
      <Legend legend={dataRadar} />
    </div>
  );
}

// three columns:

// 1).
//   text area to input string of text to check/add
//   button to add the string

// 2).
//  radar graph that displays text results layered

// 3).
//   legend that displays the different texts that have been entered
//   eacht text contains a delete option
//   a clear button at the bottom

export default RadarGraph;
