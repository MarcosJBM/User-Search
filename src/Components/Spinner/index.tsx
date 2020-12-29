import React from "react";

import spinner from "../../Assets/spinner.gif";
import "../../Styles/Components/Spinner/styles.css";

export function Spinner() {
  return (
    <div id='spinner'>
      <img src={spinner} alt='spinner' />
    </div>
  );
}
