import "./App.css";
import Quote from "./Components/Quote/Quote";
import Button from "./Components/Button/Button";
import Picture from "./Components/Picture/Picture";
import { useContext, useState } from "react";
import { Context } from "./Context/Context";

function App() {
  const [quote, setQuote] = useState("...");

  return (
    <Context.Provider value={{ quote, setQuote }}>
      <div className="App">
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
