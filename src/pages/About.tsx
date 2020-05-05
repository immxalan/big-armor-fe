import React from "react";
import NavBar from "../components/NavBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
team:{
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
}
})

function About() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <p>About page</p>
      <div className={classes.team}>
        <div className="Rich">
          <img
            src="https://avatars1.githubusercontent.com/u/58271389?s=460&u=4d3e0139e1c0c702562856c8b27022756be1c76b&v=4"
            alt="image of Richard Lynch"
          />
        </div>
        <div className="Bernd">
          <img
            src="https://ca.slack-edge.com/ESZCHB482-W012QNV1L4U-f0344b2d5106-512"
            alt="image of Bernd de Kruik"
          />
        </div>
        <div className="Brandy">
          <img
            src="https://avatars2.githubusercontent.com/u/52930131?s=460&u=9e967082f9299e499214b87757e31c21d2aaab93&v=4"
            alt="image of Brandy Becker"
          />
        </div>
        <div className="Marco">
          <img
            src="https://avatars3.githubusercontent.com/u/39717954?s=460&u=ff2e3b7f0941b4ee75c6df8aecf83b384829b80f&v=4"
            alt="image of Marco White"
          />
        </div>
        <div className="Allen">
          <img
            src="https://avatars2.githubusercontent.com/u/57642471?s=460&u=2740139954e8e1c8c1edfb7fa17be13e3d6c7e76&v=4"
            alt="image of Allen Do"
          />
        </div>
        <div className="Celeste">
          <img
            src="https://ca.slack-edge.com/ESZCHB482-W0138D80FG8-453df1f7c515-48"
            alt="image of Celeste Griffin"
          />
        </div>
        <div className="Andronik">
          <img
            src="https://avatars3.githubusercontent.com/u/14141868?s=460&u=44031fd47b2eceb8fa61eca14a69ebd0e5720f78&v=4"
            alt="image of Andronik Mkrtychev"
          />
        </div>
        <div className="Anna">
          <img
            src="https://avatars3.githubusercontent.com/u/40441965?s=460&u=fd23fe2f4191b58148af21b7eaacaa957917ed8f&v=4"
            alt="image of Anna Franceschi"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
