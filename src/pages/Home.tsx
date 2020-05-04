import React from "react";

import TryIt from "../components/TryIt/TryIt"

function Home() {

    //onClick function to route to TryIt component

    return (
        <div>
            <div>
                {/* header image should go here */}
            </div>
            <p>This is the homepage</p>
            <div>
                <h3>2 sentence general info goes here</h3>
            </div>
            <div>
                <h4>try it out example goes here</h4>
                {/* try it component with dummy data passed in */}
                <button>Try it out</button>
            </div>
            <div>
                <p>Case Study #1</p>
                <p>Case Study #2</p>
                <p>Case Study #3</p>
            </div>
            <TryIt />
        </div>
    )
}
//Header with hero image

// 2 sentence general info

// try it out example

// try it out button

// case studies(three examples of where this would be used)

// COMPONTENT try it out freely

export default Home;
