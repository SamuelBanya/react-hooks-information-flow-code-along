import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  // NOTE: We received 'onChangeColor' as a prop, which is a function that the
  // parent, 'Parent' component passed down to the child, 'Child' component
  console.log("onChangeColor:");
  console.log(onChangeColor);

  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
