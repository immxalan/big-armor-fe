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
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//creates the basic dataset 
let dataRadar: {
  datasets: { backgroundColor: string; label: string }[];
  labels: string[];
} = DataRadarCreater(MockResponseOne);

console.log(dataRadar)
// dataRadar.datasets.push(
//   DataSetCreater(
//     MockResponseOne,
//     dataRadar.labels,
//     Colors[dataRadar.datasets.length]
//   )

// );


export default class RadarGraph extends Component {
  state = {
    whichVisible: 'toxic',
    input: "",
    currentInput: "",
    latestInput: "",
    dataRadar: {}
  }
  isBottom(element: any) {
    return element.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }
  trackScrolling = () => {
    const toxicElement = document.getElementById('toxic');
    const severeToxicElement = document.getElementById('severeToxic');
    const obsceneElement = document.getElementById('obscene');
    const threatElement = document.getElementById('threat');
    const insultElement = document.getElementById('insult');
    const identityElement = document.getElementById('identityHate');
    if (this.isBottom(toxicElement)) {
      this.setState({ whichVisible: 'toxic' });
    }
    if (this.isBottom(severeToxicElement)) {
      this.setState({ whichVisible: 'severeToxic' });
    }
    if (this.isBottom(obsceneElement)) {
      this.setState({ whichVisible: 'obscene' });
    }
    if (this.isBottom(threatElement)) {
      this.setState({ whichVisible: 'threat' });
    }
    if (this.isBottom(insultElement)) {
      this.setState({ whichVisible: 'insult' });
    }
    if (this.isBottom(identityElement)) {
      this.setState({ whichVisible: 'identityHate' });
    }
  }

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event: any) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log("the string send to backend", this.state.input)
    event.preventDefault();

    // if (this.state.input !== this.state.latestInput) {

    // this.setState({ latestInput: this.state.input })

    axios
      .post("http://34.71.91.189:8000/predict", { text: `${this.state.input}` })
      .then(res => {
        console.log("this is the response", res);
        dataRadar.datasets.push(
          DataSetCreater(
            res.data,
            dataRadar.labels,
            Colors[dataRadar.datasets.length]
          )
        )
        this.setState({ dataRadar: dataRadar })
        console.log(dataRadar.datasets)
      })
      .catch(err => {
        console.log("this is the error", err)
      })


  }

  // componentDidUpdate(input: string, latestInput: string) {
  //   if (input !== latestInput) {

  //     this.setState({ latestInput: input })

  //     axios
  //       .post("http://34.71.91.189:8000/predict", { text: `${input}` })
  //       .then(res => {
  //         console.log("this is the response", res);
  //         dataRadar.datasets.push(
  //           DataSetCreater(
  //             res.data,
  //             dataRadar.labels,
  //             Colors[dataRadar.datasets.length]
  //           )
  //         )
  //       })
  //       .catch(err => {
  //         console.log("this is the error", err)
  //       })


  //   }
  // }

  render() {
    const { whichVisible } = this.state;
    // const handleSubmit = this.handleSubmit
    // const handleChange = this.handleChange
    return (
      <div className='tryItPage'>
        <div className='inputGraphLegendFlexContainer'>
          <form className="formSubmit" onSubmit={this.handleSubmit}>
            <div className='inputField'>
              <TextField
                fullWidth
                id="standard-basic"
                label="Text goes here"
                name="input"
                value={this.state.input}
                onChange={this.handleChange}
              />
            </div>
            <div className='submitButton'>
              <Button variant="contained" color="secondary" type="submit">
                Submit
      </Button>
            </div>
          </form>
          {/* <InputForm input={input} setInput={this.setInput} /> */}
          <div className='graphLegendContainer'>
            <Graph dataRadar={dataRadar} />
            <Legend legend={dataRadar} />
          </div>
        </div>
        <div className='classificationSection'>
          <div className='classificationFlexContainer' id='toxic'>
            <div className='classificationTitleContainer'>
              <h1 className='classificationTitle'>Toxic</h1>
            </div>
            <div className='classificationTextContainer'>
              <p className={whichVisible === 'toxic' ? 'classificationText is-visible' : 'classificationText'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia temporibus enim tempore voluptas nulla natus distinctio, iusto modi id fuga rerum soluta dignissimos libero culpa optio autem nesciunt unde?</p>
            </div>
          </div>
          <div className='classificationFlexContainer' id='severeToxic'>
            <div className='classificationTextContainer'>
              <p className={whichVisible === 'severeToxic' ? 'classificationText is-visible' : 'classificationText'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia temporibus enim tempore voluptas nulla natus distinctio, iusto modi id fuga rerum soluta dignissimos libero culpa optio autem nesciunt unde?</p>
            </div>
            <div className='classificationTitleContainer'>
              <h1 className='classificationTitle'>Severe Toxic</h1>
            </div>
          </div>
          <div className='classificationFlexContainer' id='obscene'>
            <div className='classificationTitleContainer'>
              <h1 className='classificationTitle'>Obscene</h1>
            </div>
            <div className='classificationTextContainer'>
              <p className={whichVisible === 'obscene' ? 'classificationText is-visible' : 'classificationText'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia temporibus enim tempore voluptas nulla natus distinctio, iusto modi id fuga rerum soluta dignissimos libero culpa optio autem nesciunt unde?</p>
            </div>
          </div>
          <div className='classificationFlexContainer' id='threat'>
            <div className='classificationTextContainer'>
              <p className={whichVisible === 'threat' ? 'classificationText is-visible' : 'classificationText'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia temporibus enim tempore voluptas nulla natus distinctio, iusto modi id fuga rerum soluta dignissimos libero culpa optio autem nesciunt unde?</p>
            </div>
            <div className='classificationTitleContainer'>
              <h1 className='classificationTitle'>Threat</h1>
            </div>
          </div>
          <div className='classificationFlexContainer' id='insult'>
            <div className='classificationTitleContainer'>
              <h1 className='classificationTitle'>Insult</h1>
            </div>
            <div className='classificationTextContainer'>
              <p className={whichVisible === 'insult' ? 'classificationText is-visible' : 'classificationText'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia temporibus enim tempore voluptas nulla natus distinctio, iusto modi id fuga rerum soluta dignissimos libero culpa optio autem nesciunt unde?</p>
            </div>
          </div>
          <div className='classificationFlexContainer' id='identityHate'>
            <div className='classificationTextContainer'>
              <p className={whichVisible === 'identityHate' ? 'classificationText is-visible' : 'classificationText'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia temporibus enim tempore voluptas nulla natus distinctio, iusto modi id fuga rerum soluta dignissimos libero culpa optio autem nesciunt unde?</p>
            </div>
            <div className='classificationTitleContainer'>
              <h1 className='classificationTitle'>Identity Hate</h1>
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

