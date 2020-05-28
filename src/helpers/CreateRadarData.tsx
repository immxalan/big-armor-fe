

//function that creates the basic structure of the object by the Radar Graph, takes in an object returned from the Big Armor API
const DataRadarCreater = (data: { text: string, results: { [index: string]: { probability: number } } }) => {

  //function that creates an array of labels by pulling all the keys inside the results object
  const dataLabelCreater = (data: { text: string, results: {} }) => {
    return Object.keys(data.results);
  };

  let newDataRadar: {
    labels: string[];
    datasets: { backgroundColor: string, label: string }[];
  } = {
    labels: dataLabelCreater(data),
    datasets: [],
  };

  return newDataRadar
};


//function that creates a dataset usable by the graph
const DataSetCreater = (dataSet: { text: string, results: { [index: string]: { probability: number } } }, labels: string[], color: string) => {
  let newDataSet: {
    label: string;
    backgroundColor: string;
    borderColor: string;
    data: number[];
  } = {
    label: dataSet.text,
    //edit the opacity as needed here
    backgroundColor: `rgba(${color}, 0.5)`,
    borderColor: `rgb(${color})`,
    data: [],
  };

  labels.forEach((item: string) => {
    newDataSet.data.push(Math.round(dataSet.results[item].probability * 100));
  });

  return newDataSet;
};

export { DataRadarCreater, DataSetCreater } 
