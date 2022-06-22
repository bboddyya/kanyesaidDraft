import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";

function Button() {
  const { setQuote } = useContext(Context);
  function getQuote() {
    fetch("https://api.kanye.rest")
      .then((data) => {
        return data.json();
      })
      .then((data) => setQuote(data.quote));
  }

  return (
    <div className="button-wrapper">
      <button onClick={getQuote}>REFRESH</button>
    </div>
  );
}

export default Button;
