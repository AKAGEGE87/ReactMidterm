import React from "react";
import "./component.css";
import { useState, useEffect } from "react";
import Card2 from "./Card2";
import Card1 from "./Card1";

const Component = () => {
  const [userName, setUserName] = useState("Jane Appleseed");
  const [cardNum, setCardNum] = useState("0000 0000 0000 0000");
  const [cardMonth, setcardMonth] = useState("00");
  const [cardYear, setcardYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [theme, setTheme] = useState(localStorage.getItem("tema") || "light");

  const [cardNumError, setCardNumError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const cardRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;

  const monthRegex = /^(0[1-9]|1[0-2])$/;
  const yearRegex = /^\d{2}$/;
  const cvcRegex = /^\d{3}$/;

  useEffect(() => {
    // document.body.className = theme;
    localStorage.setItem("tema", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const changeName = (e) => {
    setUserName(e.target.value);
  };

  const changeCardNum = (e) => {
    const inputVal = e.target.value;

    const cleanedVal = inputVal.replace(/\D/g, "");
    let formattedVal =
      cleanedVal
        .slice(0, 16)
        .match(/.{1,4}/g)
        ?.join(" ") || "";
    setCardNum(formattedVal);
    // setCardNum(e.target.value);
    // const cardNum = e.target.value;
    // if (e.target.value.length > 0) setCardNumError("");
  };

  const changeCardMonth = (e) => {
    setcardMonth(e.target.value);
    // const regex = /^\d{2}$/;
    if (e.target.value.length > 0) setMonthError("");
  };

  const changeCardYear = (e) => {
    setcardYear(e.target.value);
    if (e.target.value.length > 0) setYearError("");
  };

  const changeCvc = (e) => {
    setCvc(e.target.value);
    if (e.target.value.length > 0) setCvcError("");
  };

  const handleConfirm = (e) => {
    e.preventDefault(); // ფორმის გადაგზავნის თავიდან ასაცილებლად

    // შეცდომების მდგომარეობების საწყისი განულება
    setCardNumError("");
    setMonthError("");
    setYearError("");
    setCvcError("");

    let isValid = true;

    if (!cardRegex.test(cardNum)) {
      setCardNumError("არასწორი ბარათის ნომერი (ფორმატი: xxxx xxxx xxxx xxxx)");
      isValid = false;
    }

    if (!monthRegex.test(cardMonth)) {
      setMonthError("არასწორი თვე (MM)");
      isValid = false;
    }

    if (!yearRegex.test(cardYear)) {
      setYearError("არასწორი წელი (YY)");
      isValid = false;
    }

    if (!cvcRegex.test(cvc)) {
      setCvcError("არასწორი CVC (სამი ციფრი)");
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("cardNum", cardNum);
      localStorage.setItem("cardMonth", cardMonth);
      localStorage.setItem("cardYear", cardYear);
      localStorage.setItem("cvc", cvc);
    }
  };

  return (
    <div className={`conteiner ${theme}`}>
      <div className="banner123"></div>
      <div className="cardBox">
        <Card1
          userName={userName}
          cardNum={cardNum}
          cardMonth={cardMonth}
          cardYear={cardYear}
        />
        <Card2 cvc={cvc} />
      </div>
      <form onSubmit={handleConfirm}>
        <button
          style={{
            marginBottom: "60px",
            width: "50%"
          }}
          type="button"
          onClick={changeTheme}
          // onClick={() => {
          //   const mode =
          //     localStorage.getItem("tema") === "dark" ? "light" : "dark";
          //   localStorage.setItem("tema", mode);
          // }}
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
            maxLength={16}
          />
          {cardNumError && (
            <p
              className="error-message"
              style={{
                color: "red",
                marginBottom: "10px"
              }}
            >
              {cardNumError}
            </p>
          )}
        </div>
        <div className="box2">
          <div className="expDate">
            <label htmlFor="">Exp. Date (MM/YY)</label>
            <div className="date">
              <div>
                <input
                  type="text"
                  placeholder="MM"
                  className="dateText"
                  onChange={changeCardMonth}
                  maxLength={2}
                />
                {monthError && (
                  <p className="error-message date-error">{monthError}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="YY"
                  className="dateText"
                  onChange={changeCardYear}
                  maxLength={2}
                />
                {yearError && (
                  <p className="error-message date-error">{yearError}</p>
                )}
              </div>
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
            {cvcError && <p className="error-message">{cvcError}</p>}
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
