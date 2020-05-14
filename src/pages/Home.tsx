import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TryIt from "../components/TryIt/TryIt";
import NavBar from "../components/NavBar";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
function animateBullet(bullet: any) {
  let duration = 3000 * Math.random() + 2000;
  let animation = bullet.animate(
    [{ property: "locationX", from: 0, to: 1 }],
    duration
  );
  animation.events.on("animationended", function (event: any) {
    animateBullet(event.target.object);
  });
}

function Home() {
  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.ChordDiagram);

    chart.data = [
      { from: "Identity Hate", to: "Severe", value: 10 },
      { from: "Insult", to: "Severe", value: 8 },
      { from: "Insult", to: "Threat", value: 4 },
      { from: "Insult", to: "Toxic", value: 2 },
      { from: "Toxic", to: "Threat", value: 14 },
      { from: "Threat", to: "Severe", value: 8 },
      { from: "Toxic", to: "Identity Hate", value: 4 },
      { from: "Obscene", to: "Identity Hate", value: 7 },
      { from: "Severe", to: "Insult", value: 1 },
    ];
    chart.dataFields.color = "white";
    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    // make nodes draggable
    let nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = false;

    let nodeLink = chart.links.template;
    let bullet = nodeLink.bullets.push(new am4charts.CircleBullet());
    bullet.fillOpacity = 1;
    bullet.circle.radius = 5;
    bullet.locationX = 0.5;
    // create animations
    chart.events.on("ready", function () {
      for (var i = 0; i < chart.links.length; i++) {
        // @ts-ignore
        let link = chart.links.getIndex(i);
        // @ts-ignore
        let bullet = link.bullets.getIndex(0);

        animateBullet(bullet);
      }
    });
  });
  //onClick function to route to TryIt component

  return (
    <div>
      <NavBar />
      <div className="topView">
        <div>
          <div className="welcomeTop">
            <div className="taglineContainer">
              <div>
                <p className="tagline1">
                  <span className="taglineHighlight">Detect</span>{" "}
                  <span className="taglineSpan">toxic language early.</span>
                </p>
              </div>
              <div>
                <p className="tagline2">
                  <span className="taglineHighlight">Prevent</span>{" "}
                  <span className="taglineSpan">harmful outcomes.</span>
                </p>
              </div>
              <Button
                className="topButton"
                variant="contained"
                color="secondary"
              >
                Try it out
              </Button>
            </div>
            <div id="chartdiv" style={{ width: "490px", height: "50vh" }}></div>
          </div>
        </div>
        <section id="movingBanner">
          <div>
            <h2 className="bannerText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              doloremque veniam modi, unde sunt deleniti tenetur voluptate nisi
              autem distinctio neque quae aperiam rerum reprehenderit hic!
              Mollitia sit voluptas quod.
            </h2>
          </div>
          {/* <div>
          <h2 className='bannerText'>
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            doloremque veniam modi, unde sunt deleniti tenetur voluptate nisi
            autem distinctio neque quae aperiam rerum reprehenderit hic!
            Mollitia sit voluptas quod.
          </h2>
        </div> */}
        </section>
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
              {/* try it component with dummy data passed in */}
              <Button variant="contained" color="secondary">
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
