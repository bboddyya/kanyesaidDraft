import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import "./Button.css";

function Button() {
  const { setQuote } = useContext(Context);

  async function getQuote() {
    const data = await fetch("https://api.kanye.rest");
    const json = await data.json();
    setQuote(json.quote.toUpperCase());
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      getQuote();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="button-wrapper">
      <button onClick={getQuote}>REFRESH</button>
    </div>
  );
}

export default Button;
