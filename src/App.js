import "./App.css";
import Quote from "./Components/Quote/Quote";
import Button from "./Components/Button/Button";
import Picture from "./Components/Picture/Picture";
import { useEffect, useState } from "react";
import { Context } from "./Context/Context";
import Player from "./Components/Player/Player";

function App() {
  const [quote, setQuote] = useState("KANYE SAID...");
  const [visionQuote, setVisionQuote] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setVisionQuote(false);
  }, [quote]);

  return (
    <Context.Provider
      value={{
        quote,
        setQuote,
        visionQuote,
        setVisionQuote,
        isPlaying,
        setIsPlaying,
      }}
    >
      <div className="App">
        <Player />
        <div className="main-wrapper">
          <Picture />
          <Quote />
          <Button />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
