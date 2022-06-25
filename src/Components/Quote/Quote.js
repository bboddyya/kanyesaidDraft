import React, { useContext } from "react";
import "./Quote.css";
import { Context } from "../../Context/Context";
import { CSSTransition } from "react-transition-group";

function Quote() {
  const { quote, visionQuote } = useContext(Context);

  return (
    <div className="wrap">
      <CSSTransition in={visionQuote} timeout={150} classNames="quote-wrapper">
        <div className="quote-wrapper">{quote}</div>
      </CSSTransition>
    </div>
  );
}

export default Quote;
