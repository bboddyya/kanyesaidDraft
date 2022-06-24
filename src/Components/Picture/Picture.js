import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import fourthKanye from "../Picture/img/png/fourthKanye.png";
import "../Picture/Picture.css";
import { Context } from "../../Context/Context";

function Picture() {
  const { visionQuote } = useContext(Context);

  return (
    // <CSSTransition in={visionQuote} timeout={100} classNames="picture">
    <div className="picture">
      <img src={fourthKanye} />
    </div>
    // </CSSTransition>
  );
}

export default Picture;
