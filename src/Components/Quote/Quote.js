import React, { useContext } from "react";
import { Context } from "../../Context/Context";

function Quote() {
  const { quote } = useContext(Context);

  return <div className="quote-wrapper">{quote}</div>;
}

export default Quote;
