import { useState } from "react";
import Menu from "./Menu";
import menuData from "./data"; 

function MenuList() {
  const [startIndex, setStartIndex] = useState(0);

  const changeLeft = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const changeRight = () => {
    setStartIndex((prevIndex) =>
      prevIndex < menuData.length - 3 ? prevIndex + 1 : menuData.length - 3
    );
  };

  return (
    <div className="container-fluid mx-auto d-flex flex-wrap justify-content-center">
      <button className="btn" onClick={changeLeft}>
        <h1>
          <i className="bi bi-arrow-left-circle-fill" style={{ color: "white" }}></i>
        </h1>
      </button>
      {menuData.slice(startIndex, startIndex + 3).map((m, index) => (
        <Menu key={index} menuData={m} />
      ))}
      <button className="btn" onClick={changeRight}>
        <h1>
          <i className="bi bi-arrow-right-circle-fill" style={{ color: "white" }}></i>
        </h1>
      </button>
    </div>
  );
}

export default MenuList;
