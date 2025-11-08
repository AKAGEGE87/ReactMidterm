import React from "react";
import "./component.css";

const Card2 = ({ cvc }) => {
  return (
    <div className="card2">
      <div className="blackLine"></div>
      <p>{cvc}</p>
      <h4>Lorem ipsum dolor sit amet consectetur</h4>
    </div>
  );
};

export default Card2;
