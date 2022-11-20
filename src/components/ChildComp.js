import React from "react";

const ChildComp = ({ firstName }) => {
  console.log("child");
  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  );
};

export default React.memo(ChildComp);
