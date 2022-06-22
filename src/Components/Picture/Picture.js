import React from "react";
import firstKanye from "../Picture/img/png/Kanye-West-PNG.png";
import secondKanye from "../Picture/img/png/Kanye-West-PNG.png";
import thirdKanye from "../Picture/img/png/Kanye-West-PNG.png";
import fourthKanye from "../Picture/img/png/Kanye-West-PNG.png";

function Picture() {
  const kanyesArr = [firstKanye, secondKanye, thirdKanye, fourthKanye];

  return (
    <div className="picture">
      <img src={firstKanye} width={"200px"} />
    </div>
  );
}

export default Picture;
