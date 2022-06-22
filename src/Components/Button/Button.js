import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";

function Button() {
  const { setQuote } = useContext(Context);

  async function getQuote() {
    const data = await fetch("https://api.kanye.rest");
    const json = await data.json();
    setQuote(json.quote);
  }

  return (
    <div className="button-wrapper">
      <button onClick={getQuote}>REFRESH</button>
    </div>
  );
}

export default Button;
