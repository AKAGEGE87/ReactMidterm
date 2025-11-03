import React from "react";
import "./component.css";
import { useState } from "react";

const Component = () => {
  const [userName, setUserName] = useState("Jane Appleseed");
  const [cardNum, setCardNum] = useState("0000 0000 0000 0000");
  const [cardMonth, setcardMonth] = useState("00");
  const [cardYear, setcardYear] = useState("00");

  const changeName = (e) => {
    setUserName(e.target.value);
  };

  const changeCardNum = (e) => {
    setCardNum(e.target.value);
    const cardNum = e.target.value;
    const regex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    if (regex.test(cardNum)) {
    }
  };

  const changeCardMonth = (e) => {
    setcardMonth(e.target.value);
    const regex = /^\d{2}$/;
  };

  const changeCardYear = (e) => {
    setcardYear(e.target.value);
  };

  return (
    <div className="conteiner">
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
      <form>
        <div className="box1">
          <label htmlFor="">Cardholder Name</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={changeName}
          />
          <label htmlFor="">Card Number</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={changeCardNum}
          />
        </div>
        <div className="box2">
          <div className="expDate">
            <label htmlFor="">Exp. Date (MM/YY)</label>
            <div className="date">
              <input
                type="text"
                placeholder="MM"
                className="dateText"
                onChange={changeCardMonth}
              />
              <input
                type="text"
                placeholder="YY"
                className="dateText"
                onChange={changeCardYear}
              />
            </div>
          </div>
          <div className="cvc">
            <label htmlFor="">CVC</label>
            <input type="text" placeholder="e.g. 123" />
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default Component;
