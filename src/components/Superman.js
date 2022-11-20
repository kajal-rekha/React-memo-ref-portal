import React from "react";

const Superman = ({ superhero }) => {
  const superheroElRef = React.createRef();
  const changeTextHandler = () => {
    superheroElRef.current.textContent = superhero;
  };
  return (
    <div>
      <h1 ref={superheroElRef}>Superman</h1>
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Superman;
