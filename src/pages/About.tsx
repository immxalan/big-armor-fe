import React from "react";
import NavBar from "../components/NavBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  team: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  profilePic: {
    borderRadius: 12,
    width: 200,
  },
});

function About() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <h1>The Team</h1>
      <div className={classes.team}>
        <div>
          <img
            className={classes.profilePic}
            src="https://avatars1.githubusercontent.com/u/58271389?s=460&u=4d3e0139e1c0c702562856c8b27022756be1c76b&v=4"
            alt="image of Richard Lynch"
          />
        </div>
        <div>
          <img
            className={classes.profilePic}
            src="https://avatars2.githubusercontent.com/u/57117884?s=460&u=36ec0b2ffb92f78e303b0b2849c70cc95a54c4cc&v=4"
            alt="image of Bernd de Kruik"
          />
        </div>
        <div>
          <img
            className={classes.profilePic}
            src="https://avatars2.githubusercontent.com/u/52930131?s=460&u=9e967082f9299e499214b87757e31c21d2aaab93&v=4"
            alt="image of Brandy Becker"
          />
        </div>
        <div>
          <img
            className={classes.profilePic}
            src="https://avatars3.githubusercontent.com/u/39717954?s=460&u=ff2e3b7f0941b4ee75c6df8aecf83b384829b80f&v=4"
            alt="image of Marco White"
          />
        </div>
        <div>
          <img
            className={classes.profilePic}
            src="https://avatars2.githubusercontent.com/u/57642471?s=460&u=2740139954e8e1c8c1edfb7fa17be13e3d6c7e76&v=4"
            alt="image of Allen Do"
          />
        </div>
        <div>
          <img
            className={classes.profilePic}
            src="https://avatars0.githubusercontent.com/u/58431582?s=460&u=946065f2a65fa82e0bd7ea208b61b94145af3525&v=4"
            alt="image of Celeste Griffin"
          />
        </div>
        <div>
          <img
            className={classes.profilePic}
            src="https://avatars3.githubusercontent.com/u/14141868?s=460&u=44031fd47b2eceb8fa61eca14a69ebd0e5720f78&v=4"
            alt="image of Andronik Mkrtychev"
          />
        </div>
        <div>
          <img
            className={classes.profilePic}
            src="https://avatars3.githubusercontent.com/u/40441965?s=460&u=fd23fe2f4191b58148af21b7eaacaa957917ed8f&v=4"
            alt="image of Anna Franceschi"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
