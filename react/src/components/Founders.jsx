import { useState } from "react";

function Founders() {
  const [founders, setFounders] = useState([
    {
      name: "Ercüment Akça",
      image: "../public/img/kurucu1.webp",
      description:
        "Restoranımızın mucitlerinden tasarım ve düzenlemesine kadar bütün sorumluluklarını alan kuruculardan biridir.",
    },
    {
      name: "Selim Yalçın",
      image: "../public/img/kurucu2.webp",
      description:
        "Lezzet tariflerini geliştiren ve restoranın mutfak yönetiminde uzmanlaşan kurucularımızdan biridir.",
    },
  ]);

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {founders.map((founder, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="d-flex align-items-center">
              <div className="col-6">
                <img
                  src={founder.image}
                  className="d-block w-100"
                  alt={`${founder.name} photo`}
                />
              </div>
              <div className="col-6 px-4 mx-2 kurucu">
                <h3>{founder.name}</h3>
                <p>{founder.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Founders;
