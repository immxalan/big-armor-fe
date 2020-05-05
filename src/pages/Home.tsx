import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TryIt from "../components/TryIt";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";

const image =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80";

const useStyles = makeStyles({
  header: {
    backgroundImage: `linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 1000,
  },
  taglineContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 60,
    marginLeft: 35,
  },
  tagline: {
    fontSize: 40,
    textAlign: "left",
    width: "50%",
  },
  summary: {
    display: "flex",
  },
  summOne: {
    marginTop: 200,
    fontSize: 30,
  },
  example: {
    height: 400,
  },
  gContainer: {
    display: "flex",
    flexGrow: 3,
    justifyItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  gItem: {
    height: 200,
    width: 200,
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  tryIt: {
    display: "flex",
    height: 500,
    justifyContent: "center",
    alignContent: "center",
  },
});

function Home() {
  //onClick function to route to TryIt component

  const classes = useStyles();

  return (
    <div>
      <div>
        <div className={classes.header}>
          <NavBar />
          <div className={classes.taglineContainer}>
            <p className={classes.tagline}>Detect toxic language early.</p>
            <p className={classes.tagline}>Prevent harmful outcomes.</p>
          </div>
          <div className={classes.summary}>
            <p className={classes.summOne}>
              Get a general understanding of the culture in your company with
              text toxicity analysis from Big Armor. Use this infomation to
              shape the current and future culture of communication within your
              company.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.example}>
        <h4>try it out example goes here</h4>
        {/* try it component with dummy data passed in */}
        <Button variant="contained" color="primary">
          Try it out
        </Button>
      </div>
      <Grid
        container
        spacing={6}
        className={classes.gContainer}
        justify="center"
      >
        <Grid item xs className={classes.gItem}>
          <Paper className={classes.content}>
            Big Armor quickly evaluates submitted text for toxicity levels,
            allowing you to detect toxic or harmful language.
          </Paper>
        </Grid>
        <Grid item xs className={classes.gItem}>
          <Paper className={classes.content}>
            Detect and prevent online bullying and hate speech in online social
            media platforms or forums you manage.
          </Paper>
        </Grid>
        <Grid item xs className={classes.gItem}>
          <Paper className={classes.content}>
            Discover negative employee or customer feedback faster with Big
            Armor, helping you efficiently improve your workspace or product
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.tryIt}>
        <TryIt />
      </div>
    </div>
  );
}

export default Home;
