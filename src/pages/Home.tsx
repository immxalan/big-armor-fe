import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TryIt from "../components/TryIt/TryIt";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";

const image =
  "https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

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
    height: 500,
  },
  topButton: {
    marginTop: 30,
  },
  taglineContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tagline: {
    fontSize: 40,
    fontWeight: 200,
    width: "50%",
  },
  taglineSpan: {
    fontSize: 30,
    fontWeight: 500,
    paddingLeft: 20,
  },
  summaryBox1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(214,234,250)",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 100,
    paddingRight: 100,
  },
  summOne: {
    width: "30%",
    fontSize: 25,
    paddingRight: 35,
    textAlign: "left",
  },
  summaryBox2: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(214,234,250)",
    paddingTop: 50,
    paddingBottom: 50,
  },
  summTwo: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    fontSize: 25,
    paddingLeft: 35,
    textAlign: "left",
  },
  example: {
    display: "flex",
    flexDirection: "column",
  },
  productImage1: {
    width: 200,
  },
  productImage2: {
    width: 200,
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
      <NavBar />
      <div>
        <div className={classes.header}>
          <div className={classes.taglineContainer}>
            <p className={classes.tagline}>
              Detect{" "}
              <span className={classes.taglineSpan}>toxic language early.</span>
            </p>
            <p className={classes.tagline}>
              Prevent{" "}
              <span className={classes.taglineSpan}>harmful outcomes.</span>
            </p>
            <Button className={classes.topButton} variant="contained" color="primary">
              Try it out
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.example}>
        <div className={classes.summaryBox1}>
          <p className={classes.summOne}>
            Get a general understanding of the culture in your company with text
            toxicity analysis from Big Armor.
          </p>
          <div>
            <img
              className={classes.productImage1}
              src="https://i.imgur.com/A3P7VaY.jpg"
              alt="written computer code diplayed on monitor"
            />
          </div>
        </div>
        <div className={classes.summaryBox2}>
          <div className={classes.summTwo}>
            <p>
              Useful infomation that helps shape the current and future culture
              of your company.
            </p>

            <div>
              <h4>try it out example goes here</h4>
              {/* try it component with dummy data passed in */}
              <Button variant="contained" color="primary">
                Try it out
              </Button>
            </div>
          </div>
          <div>
            <img
              className={classes.productImage2}
              src="https://i.imgur.com/A3P7VaY.jpg"
              alt="written computer code diplayed on monitor"
            />
          </div>
        </div>
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
      <NavBar />
    </div>
    
  );
}

export default Home;
