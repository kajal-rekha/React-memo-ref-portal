import React from "react";
import Batman from "./components/Batman";
import Superman from "./components/Superman";
//import ParentComp from "./components/ParentComp";

const App = () => {
  return (
    <div>
      {/* <ParentComp /> */}
      {/* <Batman /> */}
      <Superman superhero="Batman" />
    </div>
  );
};

export default App;
