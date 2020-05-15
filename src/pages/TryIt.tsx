import React, { useEffect } from "react";
import NavBar from "../components/NavBar";

interface Props {}

const TryIt = () => {
  return (
    <div className="tryItPage">
      <NavBar backgroundTransparent={false} />
      <div>
        <p className="tryIt">lets try errr out</p>
      </div>
    </div>
  );
};

export default TryIt;
