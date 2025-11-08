import React from "react";

const Card1 = ({ userName, cardNum, cardMonth, cardYear }) => {
  return (
    <div className="card">
      <div className="circle">
        <div className="big"> </div>
        <div className="small"> </div>
      </div>
      <p className="cardNum">{cardNum}</p>
      <div className="cardName">
        <p className="userName">{userName}</p>
        <div
          style={{
            display: "flex"
          }}
        >
          <p className="cardDate">{cardMonth}</p>
          <p>/</p>
          <p className="cardDate">{cardYear}</p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
