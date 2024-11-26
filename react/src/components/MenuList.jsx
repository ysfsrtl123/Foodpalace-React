import { useState } from "react";
import Menu from "./Menu";

function MenuList() {
  const [menu] = useState([
    {
      title: "Adana Şiş Kebap",
      description: "Adana usulü şiş kebap meze ile",
      image: "/img/kebab.jpg",
    },
    {
      title: "Çıtır Tavuk",
      description: "1 porsiyon Çıtır Tavuk",
      image: "/img/brost.jpg",
    },
    {
      title: "Karışık Pizza",
      description: "Karışık enfes pizza",
      image: "/img/pizza.png",
    },
    {
      title: "Beyti Kebab",
      description: "Sizlere özel hazırlanmış beyti kebap",
      image: "/img/beytikebab.jpg",
    },
    {
      title: "Kuzu Pirzola",
      description: "Izgara kuzu pirzola",
      image: "/img/kuzupirzola.jpg",
    },
    {
      title: "Meksikan Taco",
      description: "Tam anlamıyla meksikalı taco",
      image: "/img/taco.jpg",
    },
  ]);

  const [startIndex, setStartIndex] = useState(0);

  const changeLeft = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };
 
  const changeRight = () => {
    setStartIndex((prevIndex) =>
      prevIndex < menu.length - 3 ? prevIndex + 1 : menu.length - 3
    );
  };

  return (
    <div className="container-fluid mx-auto d-flex flex-wrap justify-content-center">
      <button className="btn" onClick={changeLeft}>
        <h1>
          <i
            className="bi bi-arrow-left-circle-fill"
            style={{ color: "white" }}
          ></i>
        </h1>
      </button>
      {menu.slice(startIndex, startIndex + 3).map((m, index) => (
        <Menu key={index} menu={m} />
      ))}
      <button className="btn" onClick={changeRight}>
        <h1>
          <i
            className="bi bi-arrow-right-circle-fill"
            style={{ color: "white" }}
          ></i>
        </h1>
      </button>
    </div>
  );
}

export default MenuList;
