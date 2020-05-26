import React, { useEffect } from "react";
import TryItGraph from "../components/TryIt";
import NavBar from "../components/NavBar";

interface Props {}

const TryIt = () => {
  return (
    <div className="tryItPage">
      <NavBar backgroundTransparent={false} />
      <div>
      <div className="tryIt">
        <TryItGraph />
      </div>
      </div>
    </div>
  );
};

export default TryIt;
