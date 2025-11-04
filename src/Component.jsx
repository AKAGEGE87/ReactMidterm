import React from "react";
import "./component.css";
import { useState, useEffect } from "react";

const Component = () => {
  const [userName, setUserName] = useState("Jane Appleseed");
  const [cardNum, setCardNum] = useState("0000 0000 0000 0000");
  const [cardMonth, setcardMonth] = useState("00");
  const [cardYear, setcardYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [theme, setTheme] = useState(localStorage.getItem("tema") || "light");

  const cardRegex = /^(\d{4}-){3}\d{4}$/;

  const monthRegex = /^(0[1-9]|1[0-2])$/;
  const yearRegex = /^\d{2}$/;
  const cvcRegex = /^\d{3}$/;

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("tema", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const changeName = (e) => {
    setUserName(e.target.value);
  };

  const changeCardNum = (e) => {
    setCardNum(e.target.value);
    const cardNum = e.target.value;
  };

  const changeCardMonth = (e) => {
    setcardMonth(e.target.value);
    const regex = /^\d{2}$/;
  };

  const changeCardYear = (e) => {
    setcardYear(e.target.value);
  };

  const changeCvc = (e) => {
    setCvc(e.target.value);
  };

  return (
    <div className="conteiner">
      <div>
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
        <div className="card2">
          <p>{cvc}</p>
        </div>
      </div>
      <form>
        <button
          style={{
            marginBottom: "60px",
            width: "50%"
          }}
          onClick={() => {
            const mode =
              localStorage.getItem("tema") === "dark" ? "light" : "dark";
            localStorage.setItem("tema", mode);
          }}
        >
          Change theme
        </button>
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
            maxLength={19}
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
                maxLength={2}
              />
              <input
                type="text"
                placeholder="YY"
                className="dateText"
                onChange={changeCardYear}
                maxLength={2}
              />
            </div>
          </div>
          <div className="cvc">
            <label htmlFor="">CVC</label>
            <input
              type="text"
              placeholder="e.g. 123"
              onChange={changeCvc}
              maxLength={3}
            />
          </div>
        </div>
        <button
          onClick={() => {
            if (
              cardRegex.test(cardNum) &&
              monthRegex.test(cardMonth) &&
              yearRegex.test(cardYear) &&
              cvcRegex.test(cvc)
            ) {
              alert("Card details saved");
              localStorage.setItem("cardNum", cardNum);
              localStorage.setItem("cardMonth", cardMonth);
              localStorage.setItem("cardYear", cardYear);
              localStorage.setItem("cvc", cvc);
            } else {
              alert("Please enter a valid card number");
            }
          }}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Component;
