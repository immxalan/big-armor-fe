import React, { useState, useEffect, Component } from "react";
import Graph from "./RadarGraph/Graph";
import InputForm from "./RadarGraph/InputForm";
import Legend from "./RadarGraph/Legend";
import { DataRadarCreater, DataSetCreater } from "../helpers/CreateRadarData";
import Colors from "../helpers/Colors";
import {
  MockResponseOne,
  MockResponseTwo,
  MockResponseThree,
} from "../helpers/MockApiResponses";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// const [input, setInput] = useState("");

//creates the full dataset with three sets initialised
let dataRadar: {
  datasets: { backgroundColor: string; label: string }[];
  labels: string[];
} = DataRadarCreater(MockResponseOne);
dataRadar.datasets.push(
  DataSetCreater(
    MockResponseOne,
    dataRadar.labels,
    Colors[dataRadar.datasets.length]
  )
);
dataRadar.datasets.push(
  DataSetCreater(
    MockResponseTwo,
    dataRadar.labels,
    Colors[dataRadar.datasets.length]
  )
);
dataRadar.datasets.push(
  DataSetCreater(
    MockResponseThree,
    dataRadar.labels,
    Colors[dataRadar.datasets.length]
  )
);

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

axios
  .post("http://34.72.156.222:8000/predict/")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
// Mock GET request to /users when param `searchText` is 'John'
// arguments for reply are (status, data, headers)
// mock.onPost("/users").reply((req) => {
//   let reqData = JSON.parse(req.data);
//   let res = {
//     ...reqData.params.mockResponse,
//     text: reqData.params.text,
//   };
//   return [
//     200,
//     {
//       res,
//     },
//   ];
// });

// useEffect(() => {
//   axios
//     .post("/users", {
//       params: { mockResponse: MockResponseOne, text: input },
//     })
//     .then((response) => {
//       console.log(response);
//     });
// }, [input]);
export default class RadarGraph extends Component {
  state = {
    whichVisible: "toxic",
  };
  isBottom(element: any) {
    return element.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }
  trackScrolling = () => {
    const toxicElement = document.getElementById("toxic");
    const severeToxicElement = document.getElementById("severeToxic");
    const obsceneElement = document.getElementById("obscene");
    const threatElement = document.getElementById("threat");
    const insultElement = document.getElementById("insult");
    const identityElement = document.getElementById("identityHate");
    if (this.isBottom(toxicElement)) {
      this.setState({ whichVisible: "toxic" });
    }
    if (this.isBottom(severeToxicElement)) {
      this.setState({ whichVisible: "severeToxic" });
    }
    if (this.isBottom(obsceneElement)) {
      this.setState({ whichVisible: "obscene" });
    }
    if (this.isBottom(threatElement)) {
      this.setState({ whichVisible: "threat" });
    }
    if (this.isBottom(insultElement)) {
      this.setState({ whichVisible: "insult" });
    }
    if (this.isBottom(identityElement)) {
      this.setState({ whichVisible: "identityHate" });
    }
  };
  render() {
    const { whichVisible } = this.state;
    return (
      <div className="tryItPage">
        <div className="inputGraphLegendFlexContainer">
          <InputForm />
          <div className="graphLegendContainer">
            <Graph dataRadar={dataRadar} />
            <Legend legend={dataRadar} />
          </div>
        </div>
        <div className="classificationSection">
          <div className="classificationFlexContainer" id="toxic">
            <div className="classificationTitleContainer">
              <h1 className="classificationTitle">Toxic</h1>
            </div>
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "toxic"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="classificationFlexContainer" id="severeToxic">
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "severeToxic"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="classificationTitleContainer">
              <h1 className="classificationTitle">Severe Toxic</h1>
            </div>
          </div>
          <div className="classificationFlexContainer" id="obscene">
            <div className="classificationTitleContainer">
              <h1 className="classificationTitle">Obscene</h1>
            </div>
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "obscene"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Measures the offensive nature of text, with weight towards
                cursing and foul language.
              </p>
            </div>
          </div>
          <div className="classificationFlexContainer" id="threat">
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "threat"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Measures the hostility of text and intent to inflict damage on
                others.
              </p>
            </div>
            <div className="classificationTitleContainer">
              <h1 className="classificationTitle">Threat</h1>
            </div>
          </div>
          <div className="classificationFlexContainer" id="insult">
            <div className="classificationTitleContainer">
              <h1 className="classificationTitle">Insult</h1>
            </div>
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "insult"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Measures abusive language targeted at someone or something.
              </p>
            </div>
          </div>
          <div className="classificationFlexContainer" id="identityHate">
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "identityHate"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Measures the bias of text through prejudice on the basis of
                race, religion, sexual orientation, or other grounds.
              </p>
            </div>
            <div className="classificationTitleContainer">
              <h1 className="classificationTitle">Identity Hate</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
