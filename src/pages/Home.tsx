import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TryIt from "../components/TryIt/TryIt";
import NavBar from "../components/NavBar";

function Home() {
  //onClick function to route to TryIt component

  return (
    <div>
      <NavBar />
      <div>
        <div className="header">
          <div className="taglineContainer">
            <p className="tagline">
              Detect <span className="taglineSpan">toxic language early.</span>
            </p>
            <p className="tagline">
              Prevent <span className="taglineSpan">harmful outcomes.</span>
            </p>
            <Button className="topButton" variant="contained" color="primary">
              Try it out
            </Button>
          </div>
        </div>
      </div>
      <div className="example">
        <div className="summaryBox1">
          <p className="summOne">
            Get a general understanding of the culture in your company with text
            toxicity analysis from Big Armor.
          </p>
          <div>
            <img
              className="productImage1"
              src="https://i.imgur.com/A3P7VaY.jpg"
              alt="written computer code diplayed on monitor"
            />
          </div>
        </div>
        <div className="summaryBox2">
          <div className="summTwo">
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
              className="productImage2"
              src="https://i.imgur.com/A3P7VaY.jpg"
              alt="written computer code diplayed on monitor"
            />
          </div>
        </div>
      </div>
      <Grid container spacing={3} className="gContainer">
        <Grid item xs className="gItem">
          <Paper elevation={3} className="content">
            Big Armor quickly evaluates submitted text for toxicity levels,
            allowing you to detect toxic or harmful language.
          </Paper>
        </Grid>
        <Grid item xs className="gItem">
          <Paper elevation={3} className="content">
            Detect and prevent online bullying and hate speech in online social
            media platforms or forums you manage.
          </Paper>
        </Grid>
        <Grid item xs className="gItem">
          <Paper elevation={3} className="content">
            Discover negative employee or customer feedback faster with Big
            Armor, helping you efficiently improve your workspace or product
          </Paper>
        </Grid>
      </Grid>
      <div className="tryIt">
        <TryIt />
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
